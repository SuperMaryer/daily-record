export default {
    // 获取所有视频详情数据
    getAllVideoListData() {
        return Request.post({
            url: `${GlobalConfig.videoPre}/device/getDeviceInfo`,
            contentType: 'form',
            loading: false
        });
    },

}