# 04-loaders

本篇主要讲解常用loaders的使用

## babel

Babel是一个工具集，主要用于将ES6版本的JavaScript代码转为ES5等向后兼容的JS代码，从而可以运行在低版本浏览器或其它环境中。

Babel默认只转换新的JavaScript语法（syntax），而不转换新的 API。

什么是语法？什么是API?

```js
function say(...rest) { // 扩展运算符就是语法
  console.log(rest);
}

let sayName = () => {} // 语法

const p = Promise.resolve('a'); //API

```

新的API分类两类，一类是Promise、Map、Symbol、Proxy、Iterator等全局对象及其对象自身的方法，例如Object.assign，Promise.resolve；另一类是新的实例方法，例如数组实例方法[1, 4, -5, 10].find((item) => item < 0)

#### plugin与preset的短名称

```
"presets": ["@babel/env"] = "presets": ["@babel/preset-env"]

"plugins": ["transform-decorators-legacy"] = "plugins": ["babel-plugin-transform-decorators-legacy"]
```

如果npm包名称的前缀带有npm作用域@，例如@org/babel-plugin-xxx,短名称可以写成@org/xxx。

目前Babel7的官方npm包里绝大部分插件已经升级为@babel/plugin-前缀的，这种情况的短名称比较特殊了，绝大部分可以像babel-plugin-那样省略@babel/plugin-。但babel官方并没有给出明确的说明，所以还是推荐用全称。

预设的短名称规则与插件的类似，预设npm包名称的前缀为babel-preset-或作用域@xxx/babel-preset-xxx的可以省略掉babel-preset-。

对于Babel7的官方npm包里绝大部分预设已经升级为@babel/preset-前缀的，这种情况的短名称比较特殊了，绝大部分可以像babel-preset-那样省略@babel/preset-。但babel官方并没有给出明确的说明，例如，@babel/preset-env的短名称就是@babel/env，所以还是推荐用全称。

plugins插件数组和presets预设数组是有顺序要求的。如果两个插件或预设都要处理同一个代码片段，那么会根据插件和预设的顺序来执行。规则如下：

- 插件比预设先执行
- 插件执行顺序是插件数组从前向后执行
- 预设执行顺序是预设数组从后向前执行

#### Babel插件和预设的参数

每个插件是插件数组的一成员项，每个预设是预设数组的一成员项，默认情况下，成员项都是用字符串来表示的，例如"@babel/preset-env"。

如果要给插件或预设设置参数，那么成员项就不能写成字符串了，而要改写成一个数组。数组的第一项是插件或预设的名称字符串，第二项是个对象，该对象用来设置第一项代表的插件或预设的参数。例如给@babel/preset-env设置参数：

```json
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "entry"
        }
      ]
    ]
  }
```

### Babel 预设与插件的选择

如果你是Babel方面的小白，看了Babel配置文件一节，可能还是不知道有哪些插件和预设，该怎么选择插件和预设。本小节就是帮你解决这个问题的。

Babel7.8官方的插件和预设目前有100多个，数量这么多，我们一个个都学习其作用是要花费大量时间的。

不过，我们没有必要全部学习。在我们现在的web前端工程里，常用的插件和预设其实只有几个。抓住重点，有的放矢地学习这几个，然后举一反三，这是最快掌握Babel的途径。

#### 一、preset预设的选择

在Babel6的时代，常见的preset有babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest、babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2等。

babel-preset-es2015、babel-preset-es2016、babel-preset-es2017分别是TC39每年发布的进入标准的ES语法的转换器预设，我们在这里称之为年代preset。

目前，Babel官方不再推出babel-preset-es2017以后的年代preset了。

babel-preset-stage-0、babel-preset-stage-1、babel-preset-stage-2、babel-preset-stage-3是TC39每年草案阶段的ES语法转换器预设

从Babel7版本开始，上述的预设都已经不推荐使用了，babel-preset-stage-X因为对开发造成了一些困扰，也不再更新。

babel-preset-latest，在Babel6的时候是你在使用它的时候所有年代preset的集合，在Babel6最后一个版本，它是babel-preset-es2015、babel-preset-es2016、babel-preset-es2017这三个的集合。因为Babel官方不再推出babel-preset-es2017以后的年代preset了，所以babel-preset-latest定义变成了TC39每年发布的进入标准的ES语法的转换器预设集合。其实，和Babel6时的内涵是一样的。

@babel/preset-env包含了babel-preset-latest的功能，并对其进行增强，现在@babel/preset-env完全可以替代babel-preset-latest。

经过一番梳理，可以总结为以前要用到的那么多preset预设，现在只需一个@babel/preset-env就可以了。

在实际开发过程中，除了使用@babel/preset-env对标准的ES6语法转换，我们可能还需要类型检查和react等预设对特定语法转换。这里有三个官方预设可以使用：

- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

总结起来，Babel官方的preset，我们实际可能会用到的其实就只有4个：

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

一个普通的vue工程，Babel官方的preset只需要配一个"@babel/preset-env"就可以了。

#### 二、plugin插件的选择

虽然Babel7官方有90多个插件，不过大半已经整合在@babel/preset-env和@babel/preset-react等预设里了，我们在开发的时候直接使用预设就可以了。

目前比较常用的插件只有@babel/plugin-transform-runtime。目前我做过的几个项目，前端工程已经很少见到里使用其它的插件了。

#### 小结：

1.这节课我们主要学习了插件和预设的选择，经过一番筛选后，我们找出了会在我们开发的过程中可能用到4个预设和1个插件。分别是@babel/preset-env、@babel/preset-flow、@babel/preset-react、@babel/preset-typescript这4个预设，以及 @babel/plugin-transform-runtime 这1个插件。

2.接下来我们会学习@babel/preset-env、@babel/plugin-transform-runtime与polyfill等内容，随着学习的深入，会不断优化我们的Babel配置，并得到一个最佳配置。

### 三、html-webpack-plugin与cdn

https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/cdn.html

https://awdr74100.github.io/2020-03-23-webpack-htmlwebpackplugin/

https://vincef0ng.cn/post/vue-project-optimization/#%E4%BC%98%E5%8C%96%E4%B8%80%EF%BC%9A%E9%85%8D%E7%BD%AE%E5%88%86%E7%A6%BB

https://webpack.docschina.org/configuration/externals/#externals