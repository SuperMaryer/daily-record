<template>
    <div class="sim-main full-container">
        <base-map ref="map" class="map" @mapReady="mapReady" :option="mapOption">
            <!-- 摄像头图层 -->
            <video-layer ref="videoLayer" :map="realMap" :allVideoObj="allVideoObj" :currentLayer="currentLayer"></video-layer>
        </base-map>
    </div>
</template>

<script>
import BaseMap from "@sutpc/vue-basemap-mapboxgl";
import Api from "./api";
// 摄像头图层
import VideoLayer from "./components/video-layer";
import { corsTransform } from "@sutpc/zebra";

export default {
    components: {
        BaseMap,
        VideoLayer
    },
    data() {
        return {
            mapOption:{
                zoom:15
            },
            isMapReady: false,

            allVideoObj: {} // 所有视频id 对应详情对象
        };
    },
    methods: {
        getMap() {
            return this.map;
        },
        async mapReady() {
            this.isMapReady = true;
            this.map = this.$refs.map;
            this.realMap = this.$refs.map.getMap();
        },
        async getAllVideoListData() {
            const res = await Api.getAllVideoListData();
            if (res.code == 200) {
                const allVideoObj = {};
                res?.data?.forEach?.(v => {
                    const lngLat = corsTransform(
                        v.longitude,
                        v.latitude
                    );
                    v.longitude = lngLat[0];
                    v.latitude = lngLat[1];
                    allVideoObj[v.id] = v;
                }) || [];
                this.allVideoObj = allVideoObj;
            } else {
                Message.error(res.msg || res.message || '获取视频数据失败');
            }
        },
        moveVideoLayerToTop() {
            setTimeout(() => {
                this.$refs?.videoLayer?.moveLayerToTop?.();
            }, 1000);
        },
    },
    mounted() {
        this.getAllVideoListData();
    }
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