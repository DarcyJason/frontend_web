# 触发事件

```javascript
const button1 = document.querySelector("#button1")
button1.addEventListener("click", goStore)

/* 鼠标事件
click 单击元素时触发
dbclick 双击元素时触发
mousedown 按下鼠标按钮时触发
mouseup 释放鼠标按钮时触发
mousemove 鼠标移动时触发
mouseenter 鼠标移入元素(不会冒泡)
mouseleave 鼠标移出元素(不会冒泡)
mouseover 鼠标移入元素(会冒泡)
mouseout 鼠标移出元素(会冒泡)
contextmenu 右键点击时触发
wheel/mousewheel 鼠标滚轮滚动时触发
*/

/* 键盘事件
keydown 按键按下(支持长按重复触发)
keypress (已废弃)过去用于获取字符输入
keyup 按键释放时触发
*/

/* 输入和表单事件
input 用户输入时触发(适用于<input>、<textarea>)
change 表单值改变并失去焦点时触发(适用于<select>、<input>)
focus 元素获得焦点时触发
blur 元素失去焦点时触发
submit 表单提交时触发(<form>)
reset 表单重置时触发
*/

/* 触摸事件(适用于移动端)
touchstart 手指触摸屏幕时触发
touchmove 手指在屏幕上滑动时触发
touchend 手指离开屏幕时触发
touchcancel 系统取消触摸事件(如来电打断)
*/

/* 页面和DOM事件
DOMContentLoaded HTML加载和DOM解析完成时触发(比load早)
load 页面或资源(图片、css、JS)完全加载完成时触发
beforeunload 页面即将关闭时触发
resize 浏览器窗口大小变化时触发
scroll 页面滚动时触发
*/

/* 剪切板事件
copy 用户复制时触发
cut 用户剪切内容时触发
paste 用户粘贴内容时触发
*/

/* 拖放事件
drag 拖动元素时触发
dragstart 开始拖动时触发
dragend 拖动结束时触发
dragover 被拖动元素悬停在目标区域时触发
drop 拖动元素放下时触发
*/

/* 其他常见事件
animationstart css动画开始时触发
animationend css动画结束时触发
transitionend css过渡动画结束时触发
error 资源加载失败时(如<img>)触发
*/
```
