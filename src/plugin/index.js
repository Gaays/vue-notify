import notify from './notify.vue'
import * as method from './function'
let vueNotify = {}
let position = ''
let order = ''
vueNotify.install = function (Vue) {
    /**
     * @description  初始化，创建组件div
     * @param        {Object} options 自定义信息
    */
    Vue.prototype.$notifyInit = function (options = {}) {
        //保证页面notify父容器唯一
        if (document.getElementsByClassName("notify-wrap").length === 0) {
            // 全局存储提示框方位信息
            position = options.position || 'right-top'
            order = options.order || 'asc'
            // 获取提示框方位样式
            let notifyBoxStyle = method.getNotifyBoxStyle(options)
            // 将div容器添加到根节点
            let notifyWrap = document.createElement('div');
            notifyWrap.className = "notify-wrap"
            notifyWrap.style = `position: fixed; transition-duration: .5s;overflow:auto;overflow-x:hidden; ${notifyBoxStyle}`
            let notifyWrapContent = document.createElement('div');
            notifyWrapContent.className = "notify-wrap-content"
            document.body.appendChild(notifyWrap);
            notifyWrap.appendChild(notifyWrapContent)
        }
    }
    /**
      * @description  添加一条提示信息
      * @param        {Object} options
      * @return       
     */
    Vue.prototype.$notifyMessage = function (options = {}) {
        let params = {
            title: options.title || '',
            content: options.content || '',
            time: Object.prototype.hasOwnProperty.call(options, 'time') ? options.time : 3000,
            type: options.type || '',
            showCloseIcon: options.showCloseIcon || false,
            onClose: options.onClose || '',
            useHtml: options.useHtml || false
        }
        const notifyInstance = method.addNotifyItem(params, position, order)
        return notifyInstance

    }
    Vue.component(notify.name, notify)
}
export default vueNotify