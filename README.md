# book-store
> 这是一个基于Vue全家桶开发的图书管理系统WebApp
```
技术栈 es6+less+axios+vue2+vuex+bootstrap
```

 ## 项目截图
  ### 首页
  ![首页](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/index.png)
  ### 过往新闻
  ![过往新闻](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/before-news.png)
  ### 新闻详情页
  ![新闻详情页](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/detail.png)
  ### 侧边栏(由于知乎日报近期改版，因此侧边栏列没有列表项)
  ![侧边栏](https://github.com/spBlueCat/zhihu-daily/blob/master/screenshots/sidebar.png)


## 目录结构
```
.
|-- build					// webpack配置文件
|-- config					// 项目打包路径
|-- mock         //项目部署文件，放在服务器即可正常访问
|-- src          // 源码目录
|-- .babelrc					// ES6语法编译配置
|-- .editorconfig				// 代码编写规格配置
|-- .postcssrc.js
|-- index.html					// 入口html文件
|-- package.json				// 项目及工具的依赖配置文件
|-- package-lock.json				// 记录项目及工具的版本号的文件
|-- README.md					// readme说明
.
```

.
├── README.md
├── mock  //启动文件配置目录
│   ├──book.json
│   ├──express-server.js
│   ├──index.html
│   ├──package.json
│   ├──package-lock.json
│   ├──server.js
│   └──slider.js
├── src
│   ├──api
     │   ├──index.js
│   ├──assets
     │   ├──logo.png
│   ├──base
     │   ├──Loading.vue
     │   ├──MHeader.vue
     │   ├──Swiper.vue
     │   └──Tab.vue
│   ├──components
     │   ├──Add.vue
     │   ├──Collect.vue
     │   ├──Detail.vue
     │   ├──Home.vue
     │   └──List.vue
│   ├──router
     │   └──index.js
│   ├──store
     │   ├──getter.js
     │   ├──index.js
     │   ├──mutations.js
     │   └──mutations-type.js
│   ├──App.vue  //根组件
│   └──main.js
├── index.html
└── static

