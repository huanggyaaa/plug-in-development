# plug-in-development

> vue 插件开发

##### 全局插件和局部插件
    插件就是组件的意思
    全局插件只需在 main.js 中通过 Vue.use() 使用一次即可, 局部插件在不同的模块中使用都需要导入
##### 构建项目
    vue init webpack plug-in-dev
##### 创建组件
    ./src/components/user/Login.vue // 创建一个组件
    ./src/components/user/index.js  // 注册组件, 提供一个 install 方法
##### main.js 中加载插件
    Vue.use(UserLogin);
    因为是全局插件, 在 main.js 中一经使用, 在任何地方均可直接只用该插件
##### 使用插件
    App.vue 中可以直接使用 


