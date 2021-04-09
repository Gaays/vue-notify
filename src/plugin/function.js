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
    console.log(positionStyle);
    return positionStyle
}
/**
 * @description  添加一个提示信息
 * @param        {Element} el      提示框HTML元素
 * @param        {String} positon  提示框显示位置
 * @param        {String} order    显示顺序
*/
export function addNotifyItem(el,positon,order) {

 }
export function getNotifyItemStyle(options) { }