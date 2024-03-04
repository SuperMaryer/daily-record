### configureWebpack和chainWebpack
configureWebpack 和 chainWebpack的作用相同，唯一的区别就是它们修改 webpack 配置的方式不同:
- configureWebpack: 通过操作对象的形式，修改默认的 webpack 配置，该对象将会被 webpack-merge 合并入最终的 webpack 配置。
- chainWebpack: 通过链式编程的形式，修改默认的 webpack 配置。

#### configureWebpack
configureWebpack 可以是一个对象，也可以是一个函数
- 对象：通过 webpack-merge 合并到最终的配置中
- 函数：接受被解析的配置作为函数参数，该函数可以修改配置，修改后，可返回一个被克隆或合并过的配置版本，也可以什么都不返回。

eg: vue.config.js中

``` js
module.exports = {
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
        }
        return {
            devtool: 'source-map',
            // devtool: 'none', // 不打包sourcemap
            entry: {
                app: path.resolve(__dirname, 'src/entry/single.js'),
            },
            output: {
                library: '__SMARTROAD__', // 导出名称
                libraryTarget: 'window', //挂载目标
            },
            externals: {
                vue: 'Vue',
                axios: 'axios',
                'vue-router': 'VueRouter',
                leaflet: 'L',
                'mapbox-gl': 'mapboxgl',
                echarts: 'echarts',
                'element-ui': 'ELEMENT',
            },
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                    vue$: 'vue/dist/vue.esm.js',
                    '@': resolve('src'),
                    router: resolve('src/router'),
                    store: resolve('src/store'),
                    global: resolve('src/global'),
                    style: resolve('src/global/style'),
                    jsutil: resolve('src/global/js/util'),
                    jsmod: resolve('src/global/js/mod'),
                    components: resolve('src/components'),
                    mapSelect: resolve('src/components/common/select-map-list'),
                },
            },
            plugins: [
                new StatsPlugin('manifest.json', {
                    chunkModules: false,
                    entrypoints: true,
                    source: false,
                    chunks: false,
                    modules: false,
                    assets: false,
                    children: false,
                    exclude: [/node_modules/],
                }),
            ],
            optimization: {
                ...config.optimization,
            },
        };
    }
};
```

#### chainWebpack
是一个函数，接收一个基于 webpack-chain 的 ChainableConfig 实例。

eg: vue.config.js中

``` js
module.exports = {
    chainWebpack: (config) => {
        config.module.rule('vue').uses.delete('cache-loader');
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                delete options.cacheIdentifier;
                delete options.cacheDirectory;
                return options;
            });

        config.module
            .rule('vue')
            .exclude.clear()
            .add(/node_modules(\/|\\)(?!@?sutpc)/)
            .end();

        config.module
            .rule('eslint')
            .use('eslint-loader')
            .tap((options) => {
                return merge(options, {
                    emitWarning: true,
                    emitError: false,
                    failOnError: false,
                });
            });

        config.module
            .rule('less')
            .oneOf('vue')
            .use('theme-less')
            .loader('@sutpc/theme-less-loader')
            .end()
            .end()
            .oneOf('normal')
            .use('theme-less')
            .loader('@sutpc/theme-less-loader')
            .end();

        config.plugin('define').tap((args) => {
            for (let arg of args) {
                if (arg['process.env']) {
                    arg[
                        'process.env'
                    ].requestPre = `'${process.env.REQUEST_PRE}'`;
                }
            }
            return args;
        });
    }
};
```
