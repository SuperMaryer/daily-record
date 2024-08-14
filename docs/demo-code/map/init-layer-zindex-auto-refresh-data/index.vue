<template>
    <div class="crowd-map">
        <base-map
            ref="map"
            class="my-base-map"
            :option="mapOption"
            @map-ready="mapReady"
        >
            <!-- 摄像头图层 -->
            <!-- <video-layer
                ref="videoLayer"
                :map="realMap"
                :allVideoObj="allVideoObj"
                :currentLayer="currentLayer"
            ></video-layer> -->
        </base-map>
    </div>
</template>

<script>
import BaseMap from "@sutpc/vue-basemap-mapboxgl";
// import VideoLayer from "./components/video-layer";
import { state, action } from "./store";
import Api from './api';

export default {
    components: {
        BaseMap,
        // VideoLayer,
    },
    data() {
        return {
            mapOption: {
                zoom: 15,
            },
            isMapReady: false,

            // 刷新数据定时器
            autoRefreshTimer: null,
        };
    },
    computed: {
        // 刷新
        refreshRequest: () => state.refreshRequest,
        //地图对象
        realMap() {
            return this.$refs.map.getMap();
        },
    },
    methods: {
        // 状态控制全局request刷新
        autoRefreshFn() {
            this.autoRefreshTimer && clearInterval(this.autoRefreshTimer);

            this.autoRefreshTimer = setInterval(() => {
                action.updateRefreshRequest(this.refreshRequest ? 0 : 1);
            }, this.refreshTime);
        },
        // 加载异常分类数据
        async queryErrorCategoryData() {
            let res = await Api.queryErrorCategoryData();

            if (+res.code === 200 && res.data) {
                // 构造 errorParentTypeDescMap: {父类type: 异常类型名称desc }的映射
                // 构造 errorChildTypeDescMap: {父类type-子类type: 异常类型名称desc }的映射
                const parentTypeMap = {},
                    childTypeMap = {};

                res?.data?.forEach?.((p) => {
                    parentTypeMap[p.type] = p.desc;

                    if (p?.childList?.length) {
                        p.childList?.forEach((c) => {
                            childTypeMap[`${p.type}-${c.type}`] = c.desc;
                        });
                    }
                });

                action.updateParentTypeDescMap(parentTypeMap);
                action.updateChildTypeDescMap(childTypeMap);
            } else {
                Message.error(
                    res.msg || res.message || "获取人员排班列表数据失败!"
                );
            }
        },
        //地图加载完毕事件
        async mapReady() {
            this.initLayerAndZIndex();
            this.isMapReady = true;
        },
        initLayerAndZIndex() {
            const initGeojson = {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [],
                },
            };

            // user team-group
            this.realMap.addSource(
                "user-team-group-source",
                _.cloneDeep(initGeojson)
            );
            this.realMap.addLayer({
                id: "user-team-group-layer",
                type: "fill",
                source: "user-team-group-source",
                paint: {
                    "fill-color": ["get", "color"],
                    "fill-opacity": this.teamOpacity,
                },
            });
            this.realMap.addLayer({
                id: "user-team-group-border-layer",
                type: "line",
                source: "user-team-group-source",
                paint: {
                    "line-color": ["get", "color"],
                    "line-width": ["get", "lineWidth"],
                    "line-dasharray": [10, 4], // >= 2.3.0 版本才支持数据驱动 所以需要手动加实线border 图层
                },
            });

            // vehicle team-group
            this.realMap.addSource(
                "vehicle-team-group-source",
                _.cloneDeep(initGeojson)
            );
            this.realMap.addLayer({
                id: "vehicle-team-group-layer",
                type: "fill",
                source: "vehicle-team-group-source",
                paint: {
                    "fill-color": ["get", "color"],
                    "fill-opacity": this.teamOpacity,
                },
            });
            this.realMap.addLayer({
                id: "vehicle-team-group-border-layer",
                type: "line",
                source: "vehicle-team-group-source",
                paint: {
                    "line-color": ["get", "color"],
                    "line-width": ["get", "lineWidth"],
                    "line-dasharray": [10, 4], // >= 2.3.0 版本才支持数据驱动 所以需要手动加实线border 图层
                },
            });

            // user active-team
            this.realMap.addSource(
                "user-active-team-source",
                _.cloneDeep(initGeojson)
            );
            this.realMap.addLayer({
                id: "user-active-team-layer",
                type: "fill",
                source: "user-active-team-source",
                paint: {
                    "fill-color": ["get", "color"],
                    "fill-opacity": this.activeTeamOpacity,
                },
            });
            this.realMap.addLayer({
                id: "user-active-team-border-layer",
                type: "line",
                source: "user-active-team-source",
                paint: {
                    "line-color": ["get", "color"],
                    "line-width": 4,
                },
            });

            // user active-scope
            this.realMap.addSource(
                "user-active-scope-source",
                _.cloneDeep(initGeojson)
            );
            this.realMap.addLayer({
                id: "user-active-scope-layer",
                type: "fill",
                source: "user-active-scope-source",
                paint: {
                    "fill-color": ["get", "color"],
                    "fill-opacity": this.activeScopeOpacity,
                },
            });
            this.realMap.addLayer({
                id: "user-active-scope-border-layer",
                type: "line",
                source: "user-active-scope-source",
                paint: {
                    "line-color": ["get", "color"],
                    "line-width": 4,
                },
            });

            // vehicle active-team
            this.realMap.addSource(
                "vehicle-active-team-source",
                _.cloneDeep(initGeojson)
            );
            this.realMap.addLayer({
                id: "vehicle-active-team-layer",
                type: "fill",
                source: "vehicle-active-team-source",
                paint: {
                    "fill-color": ["get", "color"],
                    "fill-opacity": this.activeTeamOpacity,
                },
            });
            this.realMap.addLayer({
                id: "vehicle-active-team-border-layer",
                type: "line",
                source: "vehicle-active-team-source",
                paint: {
                    "line-color": ["get", "color"],
                    "line-width": 4,
                },
            });

            // vehicle active-scope
            this.realMap.addSource(
                "vehicle-active-scope-source",
                _.cloneDeep(initGeojson)
            );
            this.realMap.addLayer({
                id: "vehicle-active-scope-layer",
                type: "fill",
                source: "vehicle-active-scope-source",
                paint: {
                    "fill-color": ["get", "color"],
                    "fill-opacity": this.activeScopeOpacity,
                },
            });
            this.realMap.addLayer({
                id: "vehicle-active-scope-border-layer",
                type: "line",
                source: "vehicle-active-scope-source",
                paint: {
                    "line-color": ["get", "color"],
                    "line-width": 4,
                },
            });

            // user
            this.realMap.addSource("user-source", _.cloneDeep(initGeojson));
            this.realMap.addLayer({
                id: "user-layer",
                source: "user-source",
                type: "symbol",
                layout: {
                    "icon-image": ["get", "image"],
                    "icon-size": ["get", "imageSize"],
                    "icon-allow-overlap": true,
                    "icon-offset": [
                        "step",
                        ["get", "mag"],
                        ["literal", [0, -15]],
                        0.25,
                        ["literal", [0, -15]],
                        0.5,
                        ["literal", [0, -25]],
                    ],
                },
                paint: {
                    "icon-translate": [0, 0],
                    "icon-translate-transition": {
                        duration: 500,
                        delay: 0,
                    },
                },
            });

            // vehicle
            this.realMap.addSource("vehicle-source", initGeojson);
            this.realMap.addLayer({
                id: "vehicle-layer",
                source: "vehicle-source",
                type: "symbol",
                layout: {
                    "icon-image": ["get", "image"],
                    "icon-size": ["get", "imageSize"],
                    "icon-allow-overlap": true,
                    "icon-offset": [
                        "step",
                        ["get", "mag"],
                        ["literal", [0, -15]],
                        0.25,
                        ["literal", [0, -15]],
                        0.5,
                        ["literal", [0, -25]],
                    ],
                },
                paint: {
                    "icon-translate": [0, 0],
                    "icon-translate-transition": {
                        duration: 500,
                        delay: 0,
                    },
                },
            });

            // clock-video
            this.realMap.addSource("clock-video-source", initGeojson);
            this.realMap.addLayer({
                id: "clock-video-layer",
                source: "clock-video-source",
                type: "symbol",
                layout: {
                    "icon-image": ["get", "image"],
                    "icon-size": ["get", "imageSize"],
                    "icon-allow-overlap": true,
                    "icon-offset": [
                        "step",
                        ["get", "mag"],
                        ["literal", [0, -15]],
                        0.25,
                        ["literal", [0, -15]],
                        0.5,
                        ["literal", [0, -25]],
                    ],
                },
                paint: {
                    "icon-translate": [0, 0],
                    "icon-translate-transition": {
                        duration: 500,
                        delay: 0,
                    },
                },
            });
        },
        removeLayers() {
            // clock-video
            this.realMap.getLayer("clock-video-layer") &&
                this.realMap.removeLayer("clock-video-layer");
            this.realMap.getSource("clock-video-source") &&
                this.realMap.removeSource("clock-video-source");

            // user
            this.realMap.getLayer("user-layer") &&
                this.realMap.removeLayer("user-layer");
            this.realMap.getSource("user-source") &&
                this.realMap.removeSource("user-source");

            // vehicle
            this.realMap.getLayer("vehicle-layer") &&
                this.realMap.removeLayer("vehicle-layer");
            this.realMap.getSource("vehicle-source") &&
                this.realMap.removeSource("vehicle-source");

            // team-group
            this.realMap.getLayer("user-team-group-layer") &&
                this.realMap.removeLayer("user-team-group-layer");
            this.realMap.getLayer("user-team-group-border-layer") &&
                this.realMap.removeLayer("user-team-group-border-layer");
            this.realMap.getSource("user-team-group-source") &&
                this.realMap.removeSource("user-team-group-source");

            // active-team
            this.realMap.getLayer("user-active-team-layer") &&
                this.realMap.removeLayer("user-active-team-layer");
            this.realMap.getLayer("user-active-team-border-layer") &&
                this.realMap.removeLayer("user-active-team-border-layer");
            this.realMap.getSource("user-active-team-source") &&
                this.realMap.removeSource("user-active-team-source");

            // active-scope
            this.realMap.getLayer("user-active-scope-layer") &&
                this.realMap.removeLayer("user-active-scope-layer");
            this.realMap.getLayer("user-active-scope-border-layer") &&
                this.realMap.removeLayer("user-active-scope-border-layer");
            this.realMap.getSource("user-active-scope-source") &&
                this.realMap.removeSource("user-active-scope-source");

            // team-group
            this.realMap.getLayer("vehicle-team-group-layer") &&
                this.realMap.removeLayer("vehicle-team-group-layer");
            this.realMap.getLayer("vehicle-team-group-border-layer") &&
                this.realMap.removeLayer("vehicle-team-group-border-layer");
            this.realMap.getSource("vehicle-team-group-source") &&
                this.realMap.removeSource("vehicle-team-group-source");

            // active-team
            this.realMap.getLayer("vehicle-active-team-layer") &&
                this.realMap.removeLayer("vehicle-active-team-layer");
            this.realMap.getLayer("vehicle-active-team-border-layer") &&
                this.realMap.removeLayer("vehicle-active-team-border-layer");
            this.realMap.getSource("vehicle-active-team-source") &&
                this.realMap.removeSource("vehicle-active-team-source");

            // active-scope
            this.realMap.getLayer("vehicle-active-scope-layer") &&
                this.realMap.removeLayer("vehicle-active-scope-layer");
            this.realMap.getLayer("vehicle-active-scope-border-layer") &&
                this.realMap.removeLayer("vehicle-active-scope-border-layer");
            this.realMap.getSource("vehicle-active-scope-source") &&
                this.realMap.removeSource("vehicle-active-scope-source");
        },
    },
    mounted() {
        this.queryErrorCategoryData();
        // 开启数据刷新
        this.autoRefreshFn();
    },
    beforeDestroy() {
        this.autoRefreshTimer && clearInterval(this.autoRefreshTimer);
        this.removeLayers();
    },
};
</script>

<style lang="less" scoped>
@deep: ~">>>";

.sim-main {
    .com_panel {
        right: 51px !important;
    }

    .map {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        height: 100%;
        width: 100%;
    }

    .check-layer {
        text-align: center;
        border-radius: 5px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #6b85a4;
        cursor: pointer;
        margin: 5px 10px;
        background: #cae1ff;
    }

    .check-layer:hover {
        background: @primary-color;
        color: #fff;
    }

    .checked {
        background: @primary-color;
        color: #fff;
    }
}
</style>

<style lang="less">
.main-elcard {
    .mapmodel {
        border-radius: 10px;
    }
}

.sim-main {
    .mapboxgl-popup-content {
        width: 580px !important;
    }

    .mapboxgl-popup {
        max-width: 580px !important;
    }
}
</style>