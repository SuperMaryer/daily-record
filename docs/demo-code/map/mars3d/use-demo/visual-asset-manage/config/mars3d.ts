// import { SceneMode, ShadowMode } from 'mars3d-cesium';
export const baseOptions = {
  scene: {
    // 默认视角参数
    center: { lat: 22.387665, lng: 114.178567, alt: 94516.6, heading: 0, pitch: -73.4 },
    extent: {
      xmin: 75.0,
      xmax: 140.0,
      ymin: 0.0,
      ymax: 60.0
    },
    shadows: false, // 是否启用日照阴影
    removeDblClick: true, // 是否移除Cesium默认的双击事件
    requestRenderMode: true, // 开启显式渲染
    // maximumRenderTimeChange: Infinity, // 无操作时自动渲染帧率，设为数字会消耗性能，Infinity为无操作不渲染
    useBrowserRecommendedResolution: false, // 是否选择浏览器推荐分辨率
    // terrainShadows: ShadowMode.DISABLED, // 地质接收阴影
    // 以下是Cesium.Viewer所支持的options【控件相关的写在另外的control属性中】
    // sceneMode: 3, //3等价于Cesium.SceneMode.SCENE3D,
    sceneMode: 3,
    scene3DOnly: true, // 是否只使用3d渲染（为true时可优化性能）
    // 以下是Cesium.Scene对象相关参数
    showSun: false, // 是否显示太阳
    showMoon: false, // 是否显示月亮
    showSkyBox: true, // 是否显示天空盒
    showSkyAtmosphere: true, // 是否显示地球大气层外光圈
    fog: true, // 是否启用雾化效果
    useDefaultRenderLoop: true,
    fxaa: true, // 是否启用抗锯齿
    // 以下是Cesium.Globe对象相关参数
    shouldAnimate: true, // 自动播放动画控件
    automaticallyTrackDataSourceClocks: false,
    // targetFrameRate:30,
    globe: {
      depthTestAgainstTerrain: false, // 是否启用深度监测
      baseColor: '#dadad9', // 地球默认背景色
      showGroundAtmosphere: false, // 是否在地球上绘制的地面大气
      enableLighting: false // 是否显示昼夜区域
    },
    // 以下是Cesium.ScreenSpaceCameraController对象相关参数
    cameraController: {
      zoomFactor: 4, // 鼠标滚轮放大的步长参数
      minimumZoomDistance: 300, // 地球放大的最小值（以米为单位）
      // maximumZoomDistance: 1800000, //地球缩小的最大值（以米为单位）
      enableRotate: true, // 2D和3D视图下，是否允许用户旋转相机
      enableTranslate: true, // 2D和哥伦布视图下，是否允许用户平移地图
      enableTilt: true, // 3D和哥伦布视图下，是否允许用户倾斜相机
      enableZoom: true, // 是否允许 用户放大和缩小视图
      enableCollisionDetection: false // 是否允许 地形相机的碰撞检测
    }
  },
  control: {
    animation: false,
    geocoder: false,
    baseLayerPicker: false, // basemaps底图切换按钮
    selectionIndicator: false, // 是否显示选取指示器组件
    timeline: false, // 是否显示时间线
    homeButton: false, // 视角复位按钮
    sceneModePicker: false, // 二三维切换按钮
    navigationHelpButton: false, // 帮助按钮
    fullscreenButton: false, // 全屏按钮
    // @ts-ignore
    defaultContextMenu: false // 右键菜单
  },
  fixedLight: true,
  basemaps: [
    // {
    //   // @ts-ignore
    //   name: '天地图影像',
    //   icon: 'img/basemaps/tdt_img.png',
    //   type: 'tdt',
    //   layer: 'img_d',
    //   show: true,
    //   key: ['25c3fd606d4a0bc1e3210d5ce4f2d8ad']
    // }
    // {
    //   show: true,
    //   name: '高德影像',
    //   icon: new URL('@/assets/png/cesiumMapEngine-tdt_img.png', import.meta.url).href,
    //   type: 'gaode',
    //   layer: 'img_d'
    // }
  ],
  layers: []
};
