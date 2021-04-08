import vue from 'vue'
import notify from './notify.vue'
import $ from 'jquery'
let vueNotify = {}
const notifyComponent = vue.extend(notify);
vueNotify.install = function (Vue) {
    Vue.prototype.$msg = 'Hello I am test.js'
    /**
     * @description  初始化，创建组件div
     * @param        {Object} options 自定义信息
    */
    Vue.prototype.$notifyInit = function (options = {}) {
        let params = {
            top: options.top || '50px',
            right: options.right || '5px'
        }
        let notifyWrap = document.createElement('div');
        notifyWrap.className = "notify-wrap"
        notifyWrap.style = `position: fixed; right: ${params.right}; top: ${params.top}; transition-duration: .5s;z-index:2000;overflow:auto;overflow-x:hidden;`
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
                        title: '这是标题',
                        content: '这是内容'
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
        $('.notify-wrap').css('padding-left', '30px')
        // 添加通知
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