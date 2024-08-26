import request from '@ffhou/axios';
export default {
  // 获取网络区域列表数据
  queryNetAreaData(data) {
    return {
      "pageIndex": 1,
      "pageSize": 1000,
      "itemCount": 31,
      "pageData": [
        {
          "areaName": "DMZ区",
          "customUuid": "20220918192712160000",
          "parentCustomUuid": "0",
          "latitude": "22.5484560",
          "longitude": "114.0645520"
        },
        {
          "areaName": "办公区",
          "customUuid": "202209181927309520001",
          "parentCustomUuid": "0",
          "latitude": "22.5484560",
          "longitude": "114.0645520"
        },
        {
          "areaName": "旧数据中心",
          "customUuid": "202209181930425540002",
          "parentCustomUuid": "0",
          "latitude": "22.5484560",
          "longitude": "114.0645520"
        },
        {
          "areaName": "地铁大厦云数据中心",
          "customUuid": "202209181931072770003",
          "parentCustomUuid": "0",
          "latitude": "22.5484560",
          "longitude": "114.0645520"
        },
        {
          "areaName": "地铁大厦-云数据中心",
          "customUuid": "202209261613031650004",
          "parentCustomUuid": "0",
          "latitude": "22.5528110",
          "longitude": "114.0702310"
        },
        {
          "areaName": "深云数据中心",
          "customUuid": "202209272026109060014",
          "parentCustomUuid": "0",
          "latitude": "22.5692180",
          "longitude": "113.9995670"
        },
        {
          "areaName": "竹子林机房",
          "customUuid": "202209272026304160015",
          "parentCustomUuid": "0",
          "latitude": "22.5395930",
          "longitude": "114.0204180"
        },
        {
          "areaName": "第三方服务",
          "customUuid": "202210022310536030004",
          "parentCustomUuid": "0",
          "latitude": null,
          "longitude": null
        },
        {
          "areaName": "办公网-深铁置业",
          "customUuid": "202305041427456250140",
          "parentCustomUuid": "0",
          "latitude": "22.5415620",
          "longitude": "114.0340970"
        },
        {
          "areaName": "办公网-金融科技大厦",
          "customUuid": "202305041428331280141",
          "parentCustomUuid": "0",
          "latitude": "22.5517580",
          "longitude": "113.9513180"
        },
        {
          "areaName": "办公网-龙华有轨电车",
          "customUuid": "202305041432329650142",
          "parentCustomUuid": "0",
          "latitude": "22.6712850",
          "longitude": "114.0491910"
        },
        {
          "areaName": "办公网-平南铁路",
          "customUuid": "20230504143539660143",
          "parentCustomUuid": "0",
          "latitude": "22.5230720",
          "longitude": "113.9124150"
        },
        {
          "areaName": "办公网-深铁教育",
          "customUuid": "202305041448575070144",
          "parentCustomUuid": "0",
          "latitude": "22.5713160",
          "longitude": "114.0014690"
        },
        {
          "areaName": "办公网-地铁大厦有线",
          "customUuid": "202305041507434760146",
          "parentCustomUuid": "0",
          "latitude": "22.5528110",
          "longitude": "114.0702310"
        },
        {
          "areaName": "办公网-地铁大厦无线wifi6",
          "customUuid": "202305041508284660147",
          "parentCustomUuid": "0",
          "latitude": "22.5528110",
          "longitude": "114.0702310"
        },
      ]
    }
    return request.post({
      url: '/tesp-resource/v1/asset/visualization/getAreaList',
      loading: false,
      data
    });
  },
  // 获取告警列表数据
  queryAlarmData(data) {
    return {
      "pageIndex": 11,
      "pageSize": 1000,
      "itemCount": 10915,
      "pageData": [
        {
          "id": "33977",
          "alarmId": "QT2023-30353",
          "title": "互联网同一IP攻击多个主机行为",
          "victimizedIp": "10.34.44.34",
          "instance": null,
          "areaCustomUuid": "202209272026109060014",
          "areaName": "深云数据中心",
          "areaPath": ",0,202209272026109060014,202209272026109060014,",
          "attackIp": "184.105.247.247",
          "alarmTime": "2023-10-01 00:39:48",
          "level": "2",
          "levelLabel": "二级",
          "detail": "184.105.247.247近1小时对内网1个IP发起2次高风险攻击，涉及IP：10.34.44.34，涉及设备：绿盟DDOS，涉及行为：攻击日志,攻击源IP日志，涉及种类：攻击日志,攻击源IP日志",
          "attackCount": "1",
          "attackMeansLabel": "①对重点人投毒进行社工攻击",
          "attackResult": "2",
          "attackResultLabel": "疑似失陷",
          "attackAscription": "184.105.247.247,美国 加利福尼亚 费利蒙 Hurricane-Electric",
          "orderStatus": "无需处置"
        },
        {
          "id": "33990",
          "alarmId": "QT2023-30366",
          "title": "多源针对同一目标主机发起攻击",
          "victimizedIp": "10.34.44.30",
          "instance": "集团官网-WAF-虚拟地址",
          "areaCustomUuid": "202209272026109060014",
          "areaName": "深云数据中心",
          "areaPath": ",0,202209272026109060014,202209272026109060014,",
          "attackIp": "95.214.55.115,107.170.239.34,172.104.73.58,185.36.81.33,192.241.199.75",
          "alarmTime": "2023-10-01 00:57:32",
          "level": "2",
          "levelLabel": "二级",
          "detail": "多个外网IP【185.36.81.33,172.104.73.58,192.241.199.75,95.214.55.115,107.170.239.34】针对目标主机【10.34.44.30】攻击【攻击日志,攻击源IP日志】告警设备名称【绿盟DDOS】",
          "attackCount": "1",
          "attackMeansLabel": "①对重点人投毒进行社工攻击",
          "attackResult": "0",
          "attackResultLabel": "企图",
          "attackAscription": "192.241.199.75,美国 加利福尼亚 旧金山PLACEHOLDER172.104.73.58,日本 东京都 东京PLACEHOLDER185.36.81.33,立陶宛PLACEHOLDER95.214.55.115,波兰 华沙PLACEHOLDER107.170.239.34,美国 加利福尼亚 旧金山",
          "orderStatus": "无需处置"
        },
      ]
    }
    return request.post({
      url: 'tesp-resource/v1/asset/visualization/getAlarmList',
      loading: false,
      data
    });
  }
};
