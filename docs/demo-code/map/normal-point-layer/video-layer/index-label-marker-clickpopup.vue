<template>
    <div></div>
</template>

<script>
import { cloneDeep } from 'lodash';
import ClickPopup from './click-pupop';
import api from './api';

export default {
    props: {
        currentLayer: {
            type: String,
            default: ''
        },
        map: {
            type: Object,
            default: null
        },
        allVideoObj: {
            type: Array,
            default: () => {}
        }
    },
    data() {
        return {
            sourceName: 'video-source',
            layerName: 'video-layer',
            mapImageList: ['video'],

            pointImageSize: 0.8, // 图标原倍数
            enlargeImageSize: 1, // 图标选中放大倍数

            zoom: 16.5,
            geojsonData: {},
            linkCameraList: [],
            
            clickPopup: null,
            clickPopupVm: null,
            clickPointId: null,

            markerArr: []
        }
    },
    watch: {
        linkCameraList: {
            handler() {
                this.drawLayer();
            },
            immediate: true
        },
        currentLayer: {
            handler() {
                // 先快速处理图层层级关系
                setTimeout(() => {
                    this.moveLayerToTop();
                }, 1000)
            },
            immediate: true
        },
    },
    methods: {
        // 构造点geojson
        makeGeojsonData() {
            this.geojsonData = {
                type: 'FeatureCollection',
                features: this.linkCameraList.map((item,index) => {
                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [item.longitude||item.lng, item.latitude||item.lat]
                        },
                        properties: {
                            ...item,
                            clickPointId: item.id,
                            imageSize: this.pointImageSize,
                            imageType: 'video',
                            index,
                        }
                    };
                })
            };
        },
        async drawLayer() {
            // 根据geojson添加点图层
            this.makeGeojsonData();

            if (this.map.getSource(this.sourceName)) {
                this.map.getSource(this.sourceName).setData(this.geojsonData);
            } else {
                this.map.addSource(this.sourceName, {
                    type: 'geojson',
                    data: this.geojsonData
                });

                this.map.addLayer({
                    id: this.layerName,
                    source: this.sourceName,
                    type: 'symbol',
                    layout: {
                        // 当图标非常密集时，是否仍然显示全部的图标，默认是自动显示和隐藏
                        'icon-allow-overlap': true,
                        'icon-image': ['get', 'imageType'],
                        "icon-size": ["get", "imageSize"],
                        'icon-anchor': 'bottom'
                    }
                });

                // 鼠标移过去，变成手型
                this.map.on('mouseover', this.layerName, () => {
                    this.map.getCanvas().style.cursor = 'pointer';
                });

                // 鼠标离开，形状恢复
                this.map.on('mouseout', this.layerName, () => {
                    this.map.getCanvas().style.cursor = '';
                });

                this.clickPopup = new mapboxgl.Popup({
                    className: 'pedestrian-flow_video-popup-wrap',
                    offset: {
                        bottom: [0, -30]
                    },
                    anchor: 'bottom',
                    maxWidth: 'none'
                });

                // 弹窗关闭时，手动销毁vue组件实例
                this.clickPopup.on('close', () => {
                    this.clickPopupVm?.$destroy?.();
                    this.clickPopupVm = null;
                });

                // 点击图标
                this.map.on('click', this.layerName, this.onClickHandler);
            }
        },
        onClickHandler(e) {
            this.map.panTo(e.features[0].geometry.coordinates);
            const data = e.features?.[0]?.properties?.data || null;
            const videoData = this.isJSON(data) ? JSON.parse(data) : data;

            const tempMapData = cloneDeep(this.geojsonData);
            this.clickPointId = videoData.clickPointId || videoData.id;

            tempMapData?.features?.forEach?.((point) => {
                const isClickPoint = point.properties.clickPointId === this.clickPointId;
                point.properties.imageSize = isClickPoint ? this.enlargeImageSize : this.pointImageSize;
            });

            this.map.getSource(this.sourceName).setData(tempMapData);
        
            const lngLat = [videoData.longitude, videoData.latitude];

            //地图移动到对应点位,同时确保当用户将地图拉伸到比规定zoom深的时候，不再变回
            if (this.map.getZoom() < this.zoom) {
                this.map.flyTo({
                    center: lngLat,
                    zoom: this.zoom,
                    offset: [-200, 150],
                });
            } else {
                this.map.flyTo({
                    center: lngLat,
                    offset: [-200, 150],
                });
            }
            this.openClickPopup(videoData, lngLat);
        },
        openClickPopup(data, lngLat) {
            this.clickPopup
                .setHTML(`<div id="click-popup"></div>`)
                .setLngLat(lngLat)
                .addTo(this.map)
                .setMaxWidth("800px");

            this.clickPopupVm = new Vue({
                render(h) {
                    return h(ClickPopup, {
                        props: {
                            postData: data,
                        },
                    });
                },
            });

            this.clickPopupVm.$mount("#click-popup");
        },
        addLabelMarkers() {
            this.clearLabelMarkers();
            const mArr = [];
            this.divArr = this.linkCameraList.map(item => {
                const div = document.createElement('div');
                div.innerText = item.ecode;
                div.style.background = '#f7f8f7';
                div.style.padding = '2px 4px';
                const lngLat = [item.longitude, item.latitude];
                const marker = new mapboxgl.Marker({
                    element: div,
                    offset: [0, 10],
                    color: '#666',
                    scale: 1,
                }).setLngLat(lngLat)
                .addTo(this.map);
                mArr.push(marker);

                return div;
            });
            this.markerArr = [...mArr];
        },
        clearLabelMarkers() {
            if (this.markerArr.length) {
                this.markerArr.forEach((item) => {
                    item?.remove?.();
                });
            }
        },
        async getLinkCameraList() {
            const res = await api.getLinkCameraList({
                data: {
                    isDelete: 0, // 删除标志
                }
            });
            if (res.code == 200) {
                const list = [];
                res?.data?.forEach?.(v => {
                    const video = this.allVideoObj?.[v.camera_id];
                    if (video) list.push(video);
                }) || [];

                this.linkCameraList = list;
                this.drawLayer();
                this.addLabelMarkers();
            } else {
                Message.error(res.msg || res.message || '获取视频数据失败');
            }
        },
        // 判断传入的数据是否是json
        isJSON(str) {
            try {
                JSON.parse(str);
                return true;
            } catch (err) {
                return false;
            }
        },
        //地图图片加载
        loadAllImages() {
            this.mapImageList.map((item) => {
                new Promise((resolve) => {
                    this.map.loadImage(require(`./images/${item}.png`), (error, image) => {
                        if (error) {
                            console.error(error);
                        }
                        if (!this.map.hasImage(item)) {
                            this.map.addImage(item, image);
                        }
                        resolve();
                    });
                });
            });
        },
        // 移动图层到最顶层
        moveLayerToTop() {
            if (!this.map.getLayer(this.layerName)) return;

            const layers = this.map.getStyle().layers;
            const lastLayerId = layers[layers.length - 1].id;
            
            if (this.layerName !== lastLayerId) {
                this.map.moveLayer(lastLayerId, this.layerName);
            }
        }
    },
    beforeDestroy() {
        this.clickPopup?.remove?.();
        this.clearLabelMarkers();
        this.map.off('click', this.layerName, this.onClickHandler);

        this.map.getLayer(this.layerName) && this.map.removeLayer(this.layerName);
        this.map.getSource(this.sourceName) && this.map.removeSource(this.sourceName);
    },
    async mounted() {
        this.loadAllImages();
        this.getLinkCameraList();
    }
}
</script>

<style lang="less">
.pedestrian-flow_video-popup-wrap {
    z-index: 1;
}
</style>