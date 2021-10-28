import vue from 'vue'
import notify from './notify.vue'
import $ from 'jquery'
const notifyComponent = vue.extend(notify);

/**
 * @description  提示框style
 * @param        {Object} options 自定义样式信息
 * @return       {Object} style字符串
*/
export function getNotifyBoxStyle(options) {
  let offsetX = options.offsetX || 5
  let offsetY = options.offsetY || 20
  let zIndex = options.zIndex || 2000
  let style = {}
  switch (options.position) {
    case 'right-top':
      style = {
        top: offsetY + 'px',
        right: offsetX + 'px',
        "z-index": zIndex
      }
      break;
    case 'right-bottom':
      style = {
        bottom: offsetY + 'px',
        right: offsetX + 'px',
        "z-index": zIndex,
      }
      break;
    case 'left-top':
      style = {
        top: offsetY + 'px',
        left: offsetX + 'px',
        "z-index": zIndex,
      }
      break;
    case 'left-bottom':
      style = {
        bottom: offsetY + 'px',
        left: offsetX + 'px',
        "z-index": zIndex,
      }
      break;
    default:
      style = {
        top: offsetY + 'px',
        right: offsetX + 'px',
        "z-index": zIndex,
      }
  }
  let positionStyle = ''
  Object.keys(style).forEach(item => {
    positionStyle += item + ':' + style[item] + ';'
  })
  // positionStyle += 'transition: height 4s;'
  console.log(positionStyle);
  return positionStyle
}
/**
 * @description  添加一个提示信息
 * @param        {Object} options  提示框配置项
 * @param        {String} positon  提示框显示位置
 * @param        {String} order    显示顺序
*/
export function addNotifyItem(options = {}, positon, order) {
  let autoClose = options.time === 0 ? false : true
  //创建一个存放通知的div
  const notifyInstance = new notifyComponent({
    el: document.createElement('div'),
    data() {
      return {
        notifyFlag: true, // 是否显示
        time: 3000,//取消按钮是否显示
        message: { // 文本内容
          title: '',
          content: ''
        },
        useHtml: false,
        positon: '',
        type: 'normal', // 类型
        typeClass: 'fa-info-circle',//FA iconClass
        timer: '',
        timeFlag: false,
        showCloseIcon: false,


      }
    },
    watch: {
      // timeFlag() {
      //     if (this.timeFlag) {
      //         this.notifyFlag = false;
      //         window.clearTimeout(this.timer);
      //     }
      // }
    },
    created() {
      this.message.title = options.title;
      this.message.content = options.content;
      this.useHtml = options.useHtml
      this.position = positon
      this.type = options.type
      this.showCloseIcon = options.showCloseIcon
      this.closeFunc = options.onClose
      this.icon = options.icon
      // else {

      // }
      if (autoClose === true) {
        console.log(autoClose);
        this.timer = setTimeout(() => {
          this.notifyFlag = false;
        }, this.time);
      }

      // that = this
    },
    beforeDestroy() {
      if (autoClose === true) {
        window.clearTimeout(this.timer);
      }
    }
  })
  //往notifyWrap里面添加通知
  // 防止通知动画被父级div遮挡
  if (positon.split('-')[0] === 'left') {
    $('.notify-wrap').css('padding-right', '30px')
    setTimeout(() => {
      $('.notify-wrap').css('padding-right', '0')
    }, 400)
  } else {
    $('.notify-wrap').css('padding-left', '30px')
    setTimeout(() => {
      $('.notify-wrap').css('padding-left', '0')
    }, 400)
  }
  // 添加通知 
  // TODO:根据显示位置，处理新旧数据显示顺序;使用function的形式
  if (order == 'asc') {
    $('.notify-wrap-content').prepend(notifyInstance.$el)
  } else {
    $('.notify-wrap-content').append(notifyInstance.$el)
  }
  return notifyInstance
  // notifyInstance.$el.getElementsByClassName('el-icon-close')[0].addEventListener('click', function () {
  //     that.notifyFlag = false;
  // })
}
export function getNotifyItemStyle(options) { }