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
    title: '夯实基础',   // 必要的
    path: '/notes/intro',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    initialOpenGroupIndex: -1, // 可选的, 默认值是 0
    children: [
      '/notes/basic/queryCompare',
      '/notes/basic/unitCompare',
    ]
  },
  {
    title: '广度',
    children: [
      '/notes/breadth/jsBridge',
    ],
    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
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
    title: 'markdown 使用',
    children: [
      '/markdown/title',
      '/markdown/paragraph',
      '/markdown/list',
      '/markdown/block',
      '/markdown/code',
      '/markdown/link',
      '/markdown/picture',
      '/markdown/table',
      '/markdown/advancedUsage',
      '/markdown/keyboardShortcuts',
    ],
  }
]
module.exports = sidebar;