<template>
    <div class="click-popup-wrap">
        <p class="popup-title">灯杆编号：{{ videoTitle }}</p>
        <div class="popup-content">
            <div v-if="activeName==='video'" class="video-wrap">
                <ws-video :url="videoUrl" class="video"></ws-video>
            </div>
            <div v-else class="flow-ec-wrap">
                <flow-ec :video="postData"></flow-ec>
            </div>
        </div>
        <div class="tabs-wrap">
            <el-radio-group v-model="activeName">
                <el-radio-button label="video">实时监控</el-radio-button>
                <el-radio-button label="sim">仿真精度监控</el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>
<script>
import WsVideo from '@ffhou/vue-ws-video';
import FlowEc from './flow-ec';

export default {
    components: {
        WsVideo,
        FlowEc,
    },
    props: {
        postData: {
            type: Object,
            default: () => {
                return {};
            },
        }
    },
    data() {
        return {
            activeName: 'video',
            videoUrl: '',
        };
    },
    computed: {
        videoTitle() {
            return `${this.postData?.roadsect || ''}${this.postData?.ecode || ''}`;
        }
    },
    methods: {
        //视频处理
        async getVideoUrl() {
            const queryArgs = { vtype: this.postData.vtype };
            this.videoUrl = `${GlobalConfig.wsVideoPre}/${
                this.postData.id
            }?videoArgs={"biterate":"720k","framerate":24,"screen":"400x264"}&queryArgs=${encodeURIComponent(
                JSON.stringify(queryArgs)
            )}`;
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
    },
    mounted() {
        this.postData = this.isJSON(this.postData) ? JSON.parse(this.postData) : this.postData;
        this.getVideoUrl();
    },
};
</script>
<style lang="less" scoped>
.click-popup-wrap {
    width: 580px;
    height: 400px;
    display: flex;
    flex-direction: column;
    .popup-title {
        font-size: @font-size-base;
        color: @text-color-primary;
        margin-bottom: @side-gap-small;
    }
    .popup-content {
        flex: 1;
        box-sizing: border-box;
        .flow-ec-wrap {
            width: 100%;
            height: 100%;
        }
        .video-wrap {
            width: 100%;
            height: 100%;
            cursor: pointer;
            .video {
                width: 100%;
                height: 100%;
            }
        }
    }
    .tabs-wrap {
        margin-top: @side-gap-small;
    }
}
</style>