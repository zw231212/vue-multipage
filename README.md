# vue-multipage

> A vue multi page project
> 多页面Vue项目
## 项目来源
[参考地址](https://juejin.im/post/5a8e3f00f265da4e747fc700#heading-1)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 测试build的运行文件：
npm run server
这里是会起一个轻量级的http-server来对dist目录下的文件进行服务

```


## 静态文件引用

static目录放外部的引用
assets目录放项目本身的引用
vue在打包时只会将static下面的图片保留，assets目录下的图片会转换成base64，直接打包到js文件中，所以你用字符串是读取不到图片的

最顶层的assets目录下的文件的引用方式，在img标签直接使用assets加图片地址是不行的，对于当前页面的assets目录下文件引用直接使用./assets/文件名即可
1. 把图片放在src同级的static文件夹下。
2. 把图片放在cdn上，把网络地址存在imgUrl里，然后直接<img :src="imgUrl">去展示。
3. 图片放在assets文件夹，然后在data里面require进图片
```js
  data (){
    imgUrl:require('./assets/logo.png')
  }
```
然后<img :src="imgUrl">去展示即可。


## router不起作用的问题处理

可以使用hash来处理，多页应用之中的路由处理交给了http-server，所以使用hash来完成请求
也就是如果在当前页面上在子组件之间切换，可以使用如下的形式：
```html
<a href="/#/hello">Hello 子页面</a>
<a href="/#/global/hello">全局Hello组件</a>
```

vue能否管理全部的页面的路由？也就是在多个页面之间切换的时候还能整体控制路由请求？不知道

## 后续再完善
> 引入其他的外部文件

文件结构
----------
```
 ├── README.md
 ├── package.json
 ├── .postcssrc.js
 ├── .gitignore
 ├── .eslintrc.js
 ├── .eslintignore
 ├── .editorconfig
 ├── .babelrc
 ├── _static：存放其他外部文件
 |   ├── 404.png
 |   ├── favicon.png
 |   └── **** 
 ├── dist :项目编译目录
 |   ├── index.html  各种一级页面
 |   ├── news.html
 |   ├── test.html
 |   ├── static
 |   ├── static ：静态文件的目录
 |   ├   ├── css
 |   ├   ├── fonts
 |   ├   ├── img
 |   ├   ├── js
 |   ├   └── ……
 |   └── *.html
 ├── config ：vue配置文件
 |   ├── dev.env.js
 |   ├── index.js
 |   └── prod.env.js
 ├── build ：编译开发打包用的一些配置
 |   ├── build.js
 |   ├── check-versions.js
 |   ├── utils.js
 |   └── ……
 ├── src
 |   ├── api
 |   |   ├── config.js ：全部的url信息从这里配置
 |   |   ├── http.js  ：与服务端发送请求的基本的配置，采用axios
 |   |   └── index.js ：将config与http整合（还未整合好）
 |   ├── assets ：本项目自己产出的公共的一些静态文件信息
 |   ├── components ：公共的组件，每个页面都有可能会用到的组件
 |   |   ├── Footer.vue   公共的底部组件
 |   |   ├── NavBar.vue      导航栏组件
 |   |   ├── SearchComponent.vue：搜索组件
 |   |   ├── WordCloud.vue 词云组件
 |   |   └── ……
 |   ├── pages
 |   |   ├── index   首页模块（这里面的编写和SPA的编写就是一样的了）
 |   |   |   ├── assets      此模块自己用的一些静态文件信息
 |   |   |   ├── components  此页面自己用的通用组件将
 |   |   |   ├── hello       此页面的模块，可以有更多这样的模块
 |   |   |   ├── router      路由导航信息文件
 |   |   |   ├── store       vuex，整个页面的数据信息状态存储与操作的地方
 |   |   |   ├── App.vue     页面的主样式与操作
 |   |   |   ├── index.html  当前页面的名字 
 |   |   |   └── index.js    基本的全部的配置信息
 |   |   ├── news      新闻页面，多页测试的时候用的
 |   |   ├── scholar     学者页面
 |   |   ├── org      机构页面
 |   |   ├── field      领域页面
 |   |   ├── test：  测试，基础的搭建的模板，以index为模板最好，里面的文件模块比较完整
 |   |   └── ……
 |   ├── util       工具类          
 |   └── ……
 └── ……


```
