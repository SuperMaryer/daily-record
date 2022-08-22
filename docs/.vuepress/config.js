const navConfig =  require("./navConfig");
const sidebarConfig =  require("./sidebarConfig");
module.exports = {
    title: "daily-record",
    description: "来自一个前端程序猿的日常记录",
    base: "/daily-record/", // github
    // base: '/',  //阿里云服务器
    // dest: './dist',   // 设置输出目录
    // port: 2333, //端口
    themeConfig: { //主题配置
        // siteTitle: "daily-record",
        logo: "/assets/images/logo.png",
        nav: navConfig, // 导航栏配置
        sidebar: sidebarConfig, // 侧边栏配置
        sidebarDepth: 2,
        displayAllHeaders: true,
        activeHeaderLinks: false,
    },
    plugins: [
        // require('./my-plugin.js'),
        // ['dynamic-title', {
        //     showIcon: '/logo.png',
        //     showText: '客官欢迎回来~',
        //     hideIcon: '/logo.png',
        //     hideText: '客官不要走嘛~',
        //     recoverTime: 2000,
        // }]
    ]
}