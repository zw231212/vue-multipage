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

#测试build的运行文件：
npm run server
这里是会起一个轻量级的http-server来对dist目录下的文件进行服务

```


##静态文件引用

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


##router不起作用的问题处理

可以使用hash来处理，多页应用之中的路由处理交给了http-server，所以使用hash来完成请求
也就是如果在当前页面上在子组件之间切换，可以使用如下的形式：
```html
<a href="/#/hello">Hello 子页面</a>
<a href="/#/global/hello">全局Hello组件</a>
```

vue能否管理全部的页面的路由？也就是在多个页面之间切换的时候还能整体控制路由请求？不知道

## 后续再完善
> 引入其他的外部文件
