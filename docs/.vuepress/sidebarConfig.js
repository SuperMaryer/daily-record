// const {getChildren} = require("./vuepress-sidebar-auto/vuepress-sidebar-auto.js");
// let sidebar = {};
// sidebar = {//左侧列表
//     '/guide/': [
//         {
//             title: 'guide',
//             collapsable: false,//来让一个组永远都是展开状态
//             sidebarDepth: 2,
//             children: getChildren('./docs','guide')
//         }
//     ],
//     '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
// };

let sidebar = [
  {
    title: 'supe-ui',
    path: '/component/supe-ui',
  },
  {
    title: '每日一题',
    path: '/dailyQuestion/intro',
    children: [
      '/dailyQuestion/overview',
      '/dailyQuestion/vuex',
      '/dailyQuestion/NaN',
      '/dailyQuestion/常见状态码',
    ],
  },
  {
    title: '前端100笔记',
    path: '/notes/intro',
    children: [
      {
        title: '夯实基础',
        children: [
          '/notes/basic/Ajax Fetch Axios区别',
          '/notes/basic/px em rem vw vh区别',
          '/notes/basic/防抖节流',
          '/notes/basic/箭头函数',
          '/notes/basic/TCP三次握手和四次挥手',
          '/notes/basic/for in和for of区别',
          '/notes/basic/offsetHeight clientHeight',
          '/notes/basic/HTMLCollection和NodeList',
          '/notes/basic/computed和watch',
          '/notes/basic/vue组件通讯方式',
          '/notes/basic/vuex中mutation和action区别',
          '/notes/basic/严格模式',
          '/notes/basic/请求为什么要发送options',
        ]
      },
      {
        title: '广度',
        children: [
          '/notes/breadth/移动端H5点击300ms延迟如何解决',
          '/notes/breadth/网络请求中token和cookie区别',
          '/notes/breadth/sso单点登录',
          '/notes/breadth/HTTP协议和TCP、UDP协议',
          '/notes/breadth/HTTP协议1.0、1.1、2.0区别',
          '/notes/breadth/HTTPS中间人攻击及预防',
          '/notes/breadth/defer和async区别',
          '/notes/breadth/prefetch和dns-prefetch区别',
          '/notes/breadth/前端攻击及预防',
          '/notes/breadth/websocket和http区别',
          '/notes/breadth/websocket和长轮询的区别',
          '/notes/breadth/从输入url到网页显示的完整过程',
          '/notes/breadth/重绘repaint和重排reflow',
          '/notes/breadth/如何实现网页多标签tab通讯',
          '/notes/breadth/网页和iframe如何通讯',
          '/notes/breadth/Koa2',
          '/notes/breadth/H5很慢如何定位',
          '/notes/breadth/工作中遇到什么难题怎么解决',
        ],
      },
      {
        title: '深度',
        children: [
          '/notes/depth/垃圾回收',
          '/notes/depth/虚拟DOM(vdom)',
          '/notes/depth/nodejs如何开启进程及进程如何通讯',
          '/notes/depth/JS Bridge',
          '/notes/depth/requestAnimationFrame和requestIdleCallback区别',
          '/notes/depth/vue-router',
          '/notes/depth/vue2、vue3、react diff算法的区别',
          '/notes/depth/vue生命周期做了啥',
        ],
      },
      {
        title: '高质量代码',
        children: [
          '/notes/codes/实现数组扁平化ArrayFlatten函数',
          '/notes/codes/传任意变量准确获取类型getType函数',
          '/notes/codes/手写代码表示new一个对象的过程',
          '/notes/codes/Object.create和{}区别',
          '/notes/codes/遍历DOM树',
          '/notes/codes/手写LazyMan',
          '/notes/codes/函数柯里化curry函数',
          '/notes/codes/instanceof原理',
          '/notes/codes/bind、call、apply',
          '/notes/codes/event-bus',
          '/notes/codes/LRU缓存',
          '/notes/codes/深拷贝函数，考虑Map Set 和循环引用',
        ],
      },
      {
        title: '分析及解决问题思路',
        children: [
          '/notes/thought/map(parseInt)',
          '/notes/thought/以下代码输出什么',
          '/notes/thought/代码执行结果',
          '/notes/thought/arr to tree',
          '/notes/thought/tree to arr ',
          '/notes/thought/promise.then代码题',
          '/notes/thought/react中setState',
          '/notes/thought/对象和属性的连续赋值',
        ],
      },
      {
        title: '数据结构和算法',
        children: [
          '/notes/algorithm/复杂度 、时间复杂度、空间复杂度',
          '/notes/algorithm/旋转数组K步',
          '/notes/algorithm/判断字符串是否括号匹配',
          '/notes/algorithm/两个栈实现一个队列',
          '/notes/algorithm/定义一个JS函数，反转单向链表',
          '/notes/algorithm/链表和数组哪个实现队列更快',
          '/notes/algorithm/用js实现二分查找',
          '/notes/algorithm/找出一个数组中和为n的两个数',
          '/notes/algorithm/求一个二叉搜索树的第K小值',
          '/notes/algorithm/为什么二叉树很重要',
          '/notes/algorithm/堆栈模型、堆特点、和二叉树关系',
          '/notes/algorithm/求斐波那契数列的第n个值',
          '/notes/algorithm/将数组中的0移动到末尾',
          '/notes/algorithm/查找字符串中连续出现次数最多的字符',
          '/notes/algorithm/js实现快速排序并说明时间复杂度',
          '/notes/algorithm/找到0到10000之间的所有对称数（回文）',
          '/notes/algorithm/高效的字符串前缀匹配',
          '/notes/algorithm/数字千分位格式化',
          '/notes/algorithm/切换字母大小写',
          '/notes/algorithm/为何0.1+0.2！=0.3',
          // 以下为自己刷到的题
          '/notes/algorithm/找出单向链表中倒数 k个节点返回该节点的值',
          '/notes/algorithm/交替合并字符串',
        ],
      },
      {
        title: '项目设计',
        children: [
          '/notes/project/如何设计一个前端统计SDK',
          '/notes/project/sourcemap的作用及配置',
          '/notes/project/SPA和MPA应该如何选择',
          '/notes/project/设计一个H5编辑器的数据模型和核心功能',
          '/notes/project/设计一个"用户-角色-权限"模型"',
          '/notes/project/Hybrid模板的更新流程',
          '/notes/project/开发一个H5抽奖页需要哪些后端api',
          '/notes/project/如果你是前端负责人，将如何做技术选型',
          '/notes/project/设计实现一个H5图片懒加载SDK',
          '/notes/project/code review',
          '/notes/project/如何学习一门新语言,需要考虑哪些方面',
          '/notes/project/你觉得自己还有哪些不足',
        ],
      },
      {
        title: '经验之谈',
        children: [
          '/notes/experience/H5页面如何进行 “首屏” 优化',
        ],
      },
      {
        title: '日常积累记录',
        children: [
          '/notes/record/图标',
          '/notes/record/flex',
          '/notes/record/babel',
          '/notes/record/webpack entry output mode external loader  plugin 等',
          '/notes/record/for和forEach区别',
          '/notes/record/UDP和TCP区别',
          '/notes/record/cookie和session',
          '/notes/record/localStorage和sessionStorage',
          '/notes/record/模块化的前世今生',
          '/notes/record/关于license开源协议',
        ],
      },
    ]
  },
  {
    title: '技术栈',
    children: [
      '/techStack/overview',
    ],
    sidebarDepth: 1,    // 可选的, 默认值是 1
    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
  },
  {
    title: '图表可视化',
    sidebarDepth: 1, 
    initialOpenGroupIndex: -1,
    children: [
      '/charts/intro',
      '/charts/usage',
      '/charts/library',
      '/charts/library-charts',
      '/charts/library-d3',
      '/charts/library-antv',
      '/charts/selection',
      // '/charts/3dCharts',
      // '/charts/wsCharts',
      // '/charts/chartConponent',
      // '/charts/tools',
    ],
  },
  {
    title: 'Markdown',
    children: [
      '/markdown/title',
      '/markdown/paragraph',
      '/markdown/list',
      '/markdown/block',
      '/markdown/picture',
      '/markdown/link',
      '/markdown/code',
      '/markdown/table',
      '/markdown/advancedUsage',
      '/markdown/keyboardShortcuts',
    ],
  },
  {
    title: 'Git',
    children: [
      '/git/yarn常用指令',
      '/git/git常用指令',
      '/git/intro',
      '/git/starting',
      '/git/init',
      '/git/config',
      '/git/basic',
      '/git/branch',
    ],
  },
]
module.exports = sidebar;

// {
//   title: '夯实基础',   // 必要的
//   path: '/notes/intro',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//   // collapsable: false, // 可选的, 默认值是 true,
//   sidebarDepth: 1,    // 可选的, 默认值是 1
//   initialOpenGroupIndex: -1, // 可选的, 默认值是 0
//   children: [
//     '/notes/basic/queryCompare',
//     '/notes/basic/unitCompare',
//   ]
// },
// {
//   title: '广度',
//   children: [
//     '/notes/breadth/jsBridge',
//   ],
//   initialOpenGroupIndex: -1 // 可选的, 默认值是 0
// },