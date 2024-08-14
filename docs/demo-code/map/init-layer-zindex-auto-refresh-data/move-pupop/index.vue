<template>
    <div class="pupop-wrap">
        <template v-if="!showErrorDetail">
            <div class="title">
                <span>人员信息</span>
                <span class="close-button" @click.stop="closePopup">×</span>
            </div>
            <div class="desc-container">
                <div class="desc-row">
                    <span class="desc-label">人员姓名：</span>
                    <span class="desc-value">{{ postData.userName | nameFilter }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">排班班组：</span>
                    <span class="desc-value">{{ postData.teamName }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">排班区间及班次：</span>
                    <span class="desc-value">{{ calcWorkRangeAndWorkShiftName(postData) }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">人员岗位：</span>
                    <span class="desc-value">{{ userPostMap[+postData.userPost] }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">所属部门：</span>
                    <span class="desc-value">{{ postData.deptName | nameFilter }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">实时出勤状态：</span>
                    <span class="desc-value" :class="`${dutyStatusClassMap[postData.dutyStatus]}-color`">
                        {{ dutyStatusMap[postData.dutyStatus] }}
                    </span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">定位地点：</span>
                    <span class="desc-value">{{ position }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">定位时间：</span>
                    <span class="desc-value">{{ postData.locationTime }}</span>
                </div>
                <!-- <div class="desc-row" v-if="postData.eventNumber">
                    <span class="desc-label">近30分钟触发异常数：</span>
                    <span class="desc-value">{{ postData.eventNumber | nameFilter }}</span>
                    <el-button
                        class="desc-link"
                        type="primary"
                        size="normal"
                        @click="openErrorDetail"
                    >查看</el-button>
                </div> -->
                <div class="desc-row">
                    <span class="desc-label">近2小时轨迹：</span>
                    <el-button
                        class="desc-link"
                        type="primary"
                        size="normal"
                        @click="openTrajectory"
                    >查看</el-button>
                    <span v-if="traceTip" class="trace-tip">{{ traceTip }}</span>
                </div>
            </div>
        </template>
        <!-- <template v-if="abnomalList && abnomalList.length && showErrorDetail">
            <div class="title error-title">
                <span>{{ childTypeDescMap[`${activeAbnomalData.parentType}-${activeAbnomalData.childType}`] }}</span>
                <span class="close-button" @click.stop="closeErrorDetail">×</span>
            </div>
            <div class="desc-container">
                <div class="desc-row">
                    <span class="desc-label">触发异常：</span>
                    <el-select
                        class="select-option"
                        v-model="activeIndex"
                        placeholder="请选择"
                        popper-class="staff-attendance-select-option-popper"
                    >
                        <el-option
                            v-for="(item, index) in abnomalList"
                            :key="index"
                            :label="index+1"
                            :value="index"
                        ></el-option>
                    </el-select>
                </div>
                <div class="desc-row">
                    <span class="desc-label">异常分类：</span>
                    <span class="desc-value">{{ parentTypeDescMap[activeAbnomalData.parentType] }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">异常类别：</span>
                    <span class="desc-value">{{ childTypeDescMap[`${activeAbnomalData.parentType}-${activeAbnomalData.childType}`] }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">异常触发时间：</span>
                    <span class="desc-value">{{ activeAbnomalData.eventTime | nameFilter }}</span>
                </div>
                <div class="desc-row">
                    <span class="desc-label">异常处置状态：</span>
                    <span class="desc-value">{{ activeAbnomalData.status | formatStatus }}</span>
                </div>
            </div>
        </template> -->
    </div>
</template>

<script>
import { state } from '../../../../../store';
import Api from '../../api';
import dayjs from 'dayjs';
import { isJSON } from '@/global/js/utils/common.js';
import { wgs84ToGcj02 } from '@sutpc/zebra';
import { corsTransform } from '@sutpc/zebra';

export default {
    props: {
        postData: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            traceTip: '',
            position: '',
            activeIndex: 0,
            showErrorDetail: false,
            userPostMap: {
                1: '其他',
                2: '固定岗',
                3: '机动岗',
            },
            dutyStatusMap: {
                0: '离线',
                1: '未上班',
                2: '休息',
                3: '脱岗',
                4: '在岗',
                5: '已下班',
            },
            dutyStatusClassMap: {
                0: 'info',
                1: 'yellow',
                2: 'warning',
                3: 'danger',
                4: 'success',
                5: 'primary',
            }
        };
    },
    computed: {
        clockType() {
            return this.postData.type === 'start' ? '上班' : '下班';
        },
        parentTypeDescMap: () => state.parentTypeDescMap,
		childTypeDescMap: () => state.childTypeDescMap,
        abnomalList() {
            const abnomalList = this.postData.abnomalList;
            return isJSON(abnomalList) ? JSON.parse(abnomalList) : [];
        },
        activeAbnomalData() {
            return this.abnomalList[this.activeIndex] || {};
        },
    },
    filters: {
        nameFilter(data) {
            return data || '-';
        },
        objTypeFilter(data) {
            const typeMap = {
                1: '环卫保洁人员',
                2: '环卫司机',
                3: '市政辅助人员',
            } 
            return typeMap[+data] || '-';
        },
        workTimesFilter(data, crossDay) {
            const workTimes = typeof data === 'string' ? JSON.parse(data) : [];
            const str = workTimes.map(x => `${x.start_time}~${x.end_time}`).join(';');
            return crossDay === 1 ? str + '（+1）' : str || '-';
        },
        formatStatus(status) {
            return {
                0: '待提交',
                1: '审批中',
                2: '已完成',
                3: '不同意',
                4: '已挂起',
                5: '用户撤销',
                10: '已忽略',
                11: '待核实',
                12: '预留状态位',
                13: '待复核',
            }[+status] || '-';
        }
    },
    watch: {
        postData: {
            handler() {
                if (this.postData.address) {
                    this.position = this.postData.address;
                    return;
                }
                // this.queryPositionByLonLat();
                this.queryBdPositionByLonLat();
            },
            deep: true,
            immediate: true
        }
    },
    mounted(){
    },
    methods: {
        openErrorDetail() {
            this.showErrorDetail = true;
            this.activeIndex = 0;
        },
        closeErrorDetail() {
            this.showErrorDetail = false;
        },
        closePopup() {
            this.$emit('closePopup');
        },
        openTrajectory() {
            this.queryTrackData();
        },
        async queryTrackData() {
            const params = {
                userId: this.postData.id,
                locationTime: dayjs().add(-2, 'hour').format('YYYY-MM-DD HH:mm:ss'),
                locationEndTime: dayjs().format('YYYY-MM-DD HH:mm:ss') ,
            }

            let res = await Api.queryTrackData({
                data: params
            });

            if (+res.code === 200) {
                const traceList = res.data?.traceList || res.data || [];

                // 无数据提示 
                if (!traceList.length) {
                    this.trajectoryData = [];
                    this.traceTip = '近2小时无轨迹';
                    return;
                }

                const trajectoryData = [traceList]?.map?.(itemArr => {
                    return itemArr
                        .map(item => {
                            let [lng, lat] = corsTransform(Number(item.longitude), Number(item.latitude));
                            return {
                                lng,
                                lat,
                                time: item.locationTime,
                                speed: Number(item.speed)
                            };
                        })
                        .sort((a, b) => {
                            return new Date(a.time) - new Date(b.time);
                        });
                });
                
                this.$emit('openUserTrajectory', {
                    showTrajectory: true,
                    trajectoryData,
                    userName: this.postData.userName,
                })
            } else {
                Message.error(res.message || res.msg || '获取数据失败!');
            }
        },
        calcWorkRangeAndWorkShiftName(data) {
            const workTimes = isJSON(data.workTimes) ? JSON.parse(data.workTimes) : [];
            const timeStr = workTimes?.map?.(w => {
                const str = `${w.start_time}~${w.end_time}`
                return w.crossDay === 1 ? str + '（+1）' : str;
            }).join(';');

            const workRangeList = data.workRangeName?.split?.(',') || []; // 多个作业区间，先切开，拼接排版班次
            const workShiftName = `${data.shiftName || ''}${timeStr ? ` （ ${timeStr}）` : ''}`;// 多个作业区间的排班班次是相同的
            const list = workRangeList.map?.(workName => `${workName},${workShiftName}`);
            return list.join(';') || '';
        },
        async queryPositionByLonLat() {
            // 当前经纬度为84坐标，腾讯逆解析为火星坐标，需转换
            let [lng, lat] = wgs84ToGcj02(this.postData.longitude, this.postData.latitude);
            let location = [lat, lng].join(',');
            
            const res = await Api.regeocoder({
                location,
            });

            let address = res?.result?.formatted_addresses?.recommend || '';
            //如果只是东莞市长安镇，则替换为滨海湾新区，如果后面还有详细地址，则去掉
            if(address.trim() === '东莞市长安镇') {
                address = '滨海湾新区'
            }

			this.position = address.replace('东莞市长安镇','');
        },
        async queryBdPositionByLonLat() {
            const location = [this.postData.latitude, this.postData.longitude].join(',');
            
            const res = await Api.bdReGeocoder({
                location,
                output: 'json',
                pois: 0,
                coordtype:'wgs84'
            });

            let address = res?.result?.formatted_address || '';
            if (address === '广东省东莞市') {
                address = '滨海湾新区';
                return;
            }
            // 和人员接口返回address内容同步，只显示路名，去掉省市区
			this.position = address.replace('广东省东莞市', '');
        },
    },
};
</script>

<style lang="less" scoped>
.pupop-wrap{
    color: #fff;
    box-sizing: border-box;
    letter-spacing: 2px;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-Medium;
    align-items: center;
    
    .desc-container {
        padding: 30px;
        .desc-row {
            // display: flex;
            margin-top: 10px;
            max-width: 100%;
            line-height: 1.5;
            &:first-child {
                margin-top: 0;
            }
            .desc-label {
                color: #2ed6ef;
            }
            .trace-tip {
                margin-left: 10px;
            }
        }
        .desc-link {
            width: 100px;
            vertical-align: middle;
            margin-left: 20px;
            // line-height: 1.5;
            @{deep} {
                >span {
                    color: #fff;
                    font-size: 24px;
                }
            }
        }
    }
    .title {
        font-size: 36px;
        font-weight: bold;
        color: #2ed6ef;
        line-height: 1;
        letter-spacing: 2px;
        padding: 20px;
        border-bottom: 1px solid #e5e5e5;
    }
    .error-title {
        // 背景渐变 由红到透明
        background: linear-gradient(to right, #ff0000, rgba(255, 0, 0, 0));
        color: #fff;
    }
    .close-button {
        cursor: pointer;
        z-index: 2;
        font-size: 50px;
        position: absolute;
        right: 20px;
        top: 25px;
        color: #e5e5e5;
        &:hover {
            // color: #2ed6ef;
        }
    }
    .select-option {
        @{deep} {
            input {
                height: 50px;
                font-size: 30px;
                width: 300px;
            }
        }
    }
    .info-color {
        color: #ccc;
    }
    .success-color {
        color: #32d217;
    }
    .primary-color {
        color: #a32ce6;
    }
    .danger-color {
        color: #f93131;
    }
    .warning-color {
        color: #f37020;
    }
    .yellow-color {
        color: #f2ef4a;
    }
}
</style>
<style lang="less">
.el-select-dropdown{
    background-color: rgba(4, 18, 44, 0.9);
    .el-scrollbar{
        .el-select-dropdown__wrap{
            max-height: 600px;
            .el-scrollbar__view{
                .el-select-dropdown__item{
                    height: 60px;
                    line-height:60px;
                    font-size: 30px;
                }
            }
        }
    }
}
</style>