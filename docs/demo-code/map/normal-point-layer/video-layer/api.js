export default {
    // 获取视频点位列表数据
    getLinkCameraList(options) {
        return Request.post({
            url: `${GlobalConfig.simPre}/data/getLinkCameraList`,
            contentType: 'form',
            ...options
        });
    },
}