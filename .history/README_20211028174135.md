# vue-notify-component

> vue 通知框组件




## 安装

### 1. npm安装

```js
npm install vue-notify-component
```

### 2. 在main.js中引入

```js
import vueNotify from 'vue-notify-component'
Vue.use(vueNotify)
```



## 使用

### 1. 初始化通知框

```javascript
this.$notifyInit(options)
```

#### options配置项

| 名称     | 解释                   | 默认值    | 类型    | 可选值                                         |
| -------- | ---------------------- | --------- | ------- | ---------------------------------------------- |
| positon  | 提示框出现位置         | right-top | String  | right-top\|right-bottom\|left-top\|left-bottom |
| offsetX  | X方向偏移位置          | 0         | Number  | -                                              |
| offsetY  | Y方向偏移位置          | 0         | Number  | -                                              |
| order    | 显示顺序，默认时间升序 | asc       | String  | asc\|desc                                      |
| zIndex   | 显示层级               | 2000      | Number  | -                                              |
| closable | 是否显示关闭按钮       | false     | Boolean | true\|false                                    |
| onClose  | 消息框关闭回调函数     | -         | Object  | -                                              |

### 2. 使用通知框

```js
this.$notifyMessage(options)
```

#### options配置项

| 名称          | 解释                                | 默认值 | 类型         | 可选值                          |
| ------------- | ----------------------------------- | ------ | ------------ | ------------------------------- |
| title         | 标题名称                            | 空     | String\|HTML |                                 |
| body          | 内容名称                            | 空     | String\|HTML |                                 |
| time          | 提示框关闭时间，单位ms，为0时不关闭 | 3000   | Number       |                                 |
| type          | 模板预设样式，默认不显示图标        | 空     | String       | normal\|success\|warning\|error |
| showCloseIcon | 是否显示关闭按钮                    | false  | Boolean      | true\|false                     |

#### 方法

> `this.$notifyMessage()` 返回当前通知框实例，可调用close方法手动关闭实例

| 名称  | 解释           |
| ----- | -------------- |
| close | 关闭notify方法 |




## 依赖：

- jquery