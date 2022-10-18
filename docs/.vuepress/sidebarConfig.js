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
        ]
      },
      {
        title: '广度',
        children: [
          '/notes/breadth/jsBridge',
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