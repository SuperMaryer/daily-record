export default {
    // 获取异常类型数据
    queryErrorCategoryData(options) {
        return Requestv2.post({
          // url: `${GlobalConfig.sanitationHub}/report/getAbnormalTypes`,
          url: `/bhw/req/SmrSaas/req/sanitationHub/report/getAbnormalTypes`,
            loading: false,
            contentType: 'json',
            ...options,
        });
    },
    // 腾讯地点逆地址解析
    regeocoder(data) {
        return Request.get({
            url: '/bhw/req/qqmap/ws/geocoder/v1/',
            data,
            loading: false,
            contentType: 'json'
        });
    },
    /**
     * 百度地点逆地址解析
     * 该接口基于百度逆解析接口做了封装，不用传key，后端已做封装处理
     * 百度文档地址https://lbsyun.baidu.com/faq/api?title=webapi/guide/webservice-geocoding-abroad-base
     * example: http://10.10.201.121/bhw/req/bdmap/reverse_geocoding/v3/?location=22.740890,113.75617&output=json&pois=0&coordtype=wgs84
     * @param location String 经纬度逗号拼接 latitude,latitude
     * @param output String 返回数据类型 json/xml 建议使用 json
     * @param pois String 对应原接口extensions_poi， 0:不召回pois数据;1:返回pois数据（默认显示周边1000米内的poi），并返回sematic_description语义化数据。
     * @param coordtype String 坐标的类型，目前支持的坐标类型包括：bd09ll（百度经纬度坐标）、bd09mc（百度米制坐标）、gcj02（国测局经纬度坐标，仅限中国）、wgs84（ GPS经纬度）
     * @returns 具体可看文档
     */
     bdReGeocoder(data) {
      return Request.get({
          url: '/bdmap/reverse_geocoding/v3/',
          data,
          loading: false,
          contentType: 'json'
      });
  },
};
