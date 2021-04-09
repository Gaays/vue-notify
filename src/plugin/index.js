import vue from 'vue'
import notify from './notify.vue'
import $ from 'jquery'
import * as method from './function'
let vueNotify = {}
const notifyComponent = vue.extend(notify);
let position = ''
let order = ''
vueNotify.install = function (Vue) {
    /**
     * @description  初始化，创建组件div
     * @param        {Object} options 自定义信息
    */
    Vue.prototype.$notifyInit = function (options = {}) {
        // 全局存储提示框方位信息
        position = options.position || 'right-top'
        order = options.order || 'asc'
        // 获取提示框方位样式
        let notifyBoxStyle = method.getNotifyBoxStyle(options)


        let notifyWrap = document.createElement('div');
        notifyWrap.className = "notify-wrap"
        notifyWrap.style = `position: fixed; transition-duration: .5s;overflow:auto;overflow-x:hidden; ${notifyBoxStyle}`
        let notifyWrapContent = document.createElement('div');
        notifyWrapContent.className = "notify-wrap-content"
        document.body.appendChild(notifyWrap);
        notifyWrap.appendChild(notifyWrapContent)
    }
    /**
     * @description  提示框配置
     * @param        {Object} content 显示信息
     * @param        {String} type 提示框类型，parameter： success，error，warning
     * @param        {Number} time 显示时长,单位ms, time=0时不自动关闭
    */
    Vue.prototype.$notifyMessage = function (message = {}, type, time = 3000) {
        let that
        //创建一个存放通知的div
        const notifyDom = new notifyComponent({
            el: document.createElement('div'),
            data() {
                return {
                    notifyFlag: true, // 是否显示
                    time: time,//取消按钮是否显示
                    message: { // 文本内容
                        title: '',
                        content: ''
                    },
                    type: type, // 类型
                    timer: '',
                    timeFlag: false,
                }
            },
            watch: {
                timeFlag() {
                    if (this.timeFlag) {
                        this.notifyFlag = false;
                        window.clearTimeout(this.timer);
                    }
                }
            },
            created() {
                if (Object.keys(message).length !== 0) {
                    this.message = message
                }
                // else {

                // }
                this.timer = setTimeout(() => {
                    this.timeFlag = true;
                }, this.time);
                that = this
            },
            beforeDestroy() {
                window.clearTimeout(this.timer);
            }
        })

        //往notifyWrap里面添加通知
        // 防止通知动画被父级div遮挡
        // TODO:根据显示位置，处理padding方向
        $('.notify-wrap').css('padding-left', '30px')
        // 添加通知 
        // TODO:根据显示位置，处理新旧数据显示顺序;使用function的形式
        $('.notify-wrap-content').prepend(notifyDom.$el)
        setTimeout(() => {
            $('.notify-wrap').css('padding-left', '0')
        }, 400)
        // notifyDom.$el.getElementsByClassName('el-icon-close')[0].addEventListener('click', function () {
        //     that.notifyFlag = false;
        // })

    }
    Vue.component(notify.name, notify) // testPanel.name 组件的name属性
}
export default vueNotify