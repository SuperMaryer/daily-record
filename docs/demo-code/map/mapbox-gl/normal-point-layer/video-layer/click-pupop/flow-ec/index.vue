<template>
    <div ref="panel" class="flow-ec-wrap">
        <ec-autofill
            :option="ecOption"
            :optionHandler="optionHandler"
        ></ec-autofill>
    </div>
</template>

<script>
import api from './api';
import EcOption from './ec-option';
import { merge } from 'lodash';
import { EcAutofill } from '@ffhou/vue-ec-timeprecision';

export default {
    props: {
        video: {
            type: Object,
            default: () => {}
        }
    },
    components: {
        EcAutofill
    },
    watch: {
        video: {
            handler() {
                this.init();
            },
            immediate: true,
        },
    },
    data() {
        return {
            ecOption: null,
        };
    },
    methods: {
        async init() {
            const [list1, list2, list3] = await Promise.all([
                this.getLinkCameraVolumeData(),
                this.getLinkSimulationVolumeData(0),
                this.getLinkSimulationVolumeData(15),
            ]);

            const data = [...list1, ...list2, ...list3];

            this.ecOption = {
                data,
                yKey: 'count',
                xKey: 'period',
                xGap: 2,
                nameKey: 'type',
                timeprecision: '15分钟',
            };
        },
        optionHandler(ecOption) {
            return merge(ecOption, EcOption.getVehicleFlowEc());
        },
        // 获取实时车流数据
        async getLinkCameraVolumeData() {
            const res = await api.getLinkCameraVolumeData({
                data: {
                    cameraId: this.video.id,
                },
                context: this
            });

            if (res.code != 200) {
                Message.error('获取数据失败!');
                return [];
            }

            const list = res?.data?.map?.(x => {
                return {
                    period: x.period,
                    count: x.vehicle_count,
                    type: '车流量',   
                }
            });

            return list;
        },
        /**
         * 获取仿真车流数据
         * @param {*} flag 0:仿真车流量, 15:仿真车流量(15min) 后续看图效果选定一组数据
         */
        async getLinkSimulationVolumeData(flag) {
            const res = await api.getLinkSimulationVolumeData({
                data: {
                    cameraId: this.video.id,
                    flag
                },
                context: this
            });

            if (res.code != 200) {
                Message.error('获取数据失败!');
                return [];
            }

            const list = res?.data?.map?.(x => {
                return {
                    period: x.period,
                    count: x.volume,
                    type: `仿真车流量(${flag})`, 
                }
            });

            return list;
        },
    },
};
</script>
<style lang="less" scoped>
.flow-ec-wrap {
    width: 100%;
    height: 100%;
}
</style>