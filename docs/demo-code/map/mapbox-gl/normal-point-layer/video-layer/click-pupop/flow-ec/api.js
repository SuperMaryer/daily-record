export default {
    getLinkCameraVolumeData(option) {
        return Request.post({
            url: `${GlobalConfig.simPre}/data/getLinkCameraVolumeData`,
            contentType: 'form',
            ...option
        })
    },
    getLinkSimulationVolumeData(option) {
        return Request.post({
            url: `${GlobalConfig.simPre}/data/getLinkSimulationVolumeData`,
            contentType: 'form',
            ...option
        })
    },
}