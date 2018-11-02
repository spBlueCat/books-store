# book-store
> 这是一个基于Vue全家桶开发的图书管理系统WebApp
```
## 技术栈：
> es6+less+axios+vue2+vuex+bootstrap
```
 ## 在线预览DEMO(推荐使用Chrome浏览器手机调试模式观看)
   [知乎日报DEMO](http://47.106.107.188:8000/home)

 ## 项目截图
  ### 首页
  ![首页](https://github.com/spBlueCat/books-store/blob/master/screenshots/index.png)
  ### 列表页
  ![首页](https://github.com/spBlueCat/books-store/blob/master/screenshots/book-list.png)
  ### 详情页(点击列表项进入详情页)
  ![详情页](https://github.com/spBlueCat/books-store/blob/master/screenshots/details.png)
  ### 收藏页
  ![首页](https://github.com/spBlueCat/books-store/blob/master/screenshots/collect.png)
  ### 添加商品
  ![添加商品](https://github.com/spBlueCat/books-store/blob/master/screenshots/add.png)


## 目录结构
```
.
|-- build					// webpack配置文件
|-- config					// 项目打包路径
|-- mock         // 项目部署文件，放在服务器即可正常访问
|-- src          // api文件目录
|	|-- api	        // api目录
|	|	|-- index.js    // api文件
|	|-- assets	        // 资源目录
|	|-- components	    // 组件目录
|	|-- base	          // 基础组件目录
|	|-- router	         // 路由文件目录
|	|-- store	          // vuex文件目录
|	|-- App.vue				// 页面入口文件
|	|-- main.js				// 程序入口文件，加载各种公共组件
|-- .babelrc					// ES6语法编译配置
|-- .editorconfig				// 代码编写规格配置
|-- .postcssrc.js
|-- index.html					// 入口html文件
|-- package.json				// 项目及工具的依赖配置文件
|-- package-lock.json				// 记录项目及工具的版本号的文件
|-- README.md					// readme说明
.
```

