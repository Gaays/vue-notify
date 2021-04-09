# vue-notify

> vue 通知框组件

基本代码已完成



## 安装

### 1. npm安装

```js
npm install vue-notify
```

### 2. 在main.js中引入

```js
import vueNotify from 'vue-notify'
Vue.use(vueNotify)
```



## 使用

### 1. 初始化通知框

```javascript
this.$notifyInit(options)
```

#### options配置项

| 名称    | 解释                          | 默认值    | 类型   | 可选值                                         |
| ------- | ----------------------------- | --------- | ------ | ---------------------------------------------- |
| positon | 提示框出现位置                | right-top | String | right-top\|right-bottom\|left-top\|left-bottom |
| offsetX | X方向偏移位置                 | 0         | Number | -                                              |
| offsetY | Y方向偏移位置                 | 0         | Number | -                                              |
| order   | 显示顺序,最新一条通知在最上面 | asc       | String | asc\|desc                                      |
| zIndex  | 显示层级                      | 2000      | Number | -                                              |

### 2. 使用通知框

```js
this.$notifyMessage(options)
```

#### options配置项

| 名称  | 解释                                | 默认值 | 类型         | 可选值                  |
| ----- | ----------------------------------- | ------ | ------------ | ----------------------- |
| title | 标题名称                            | 空     | String\|HTML |                         |
| body  | 内容名称                            | 空     | String\|HTML |                         |
| time  | 提示框关闭时间，单位ms，为0时不关闭 | 3000   | Number       |                         |
| type  | 默认样式模板                        | normal | String       | success\|warning\|error |



## TODO：

- [x] 显示位置功能（左上、左下、右上、右下及偏移）
- [ ] 显示顺序功能（正序、倒叙）
- [ ] 默认颜色模板
- [ ] 提示框关闭回调函数

## 依赖：

- jquery