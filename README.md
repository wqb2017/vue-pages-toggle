# vue-pages-toggle

> 基于 vue 的页面轮播

## example

![](./example/demo.gif)

## api

```js
@param {String} position 定位，默认定位上面
@param {Boolean} isPagesKeys 是否显示keys，默认显示
@param {Object, Array} pagesKeysStyle keys样式
@param {Object, Array} pagesKeysActiveStyle keys选中样式
@param {Boolean} isUseKeydown 是否启动键盘事件,默认不启动
@param {Number} swipeTime 轮播时间，默认2000ms
@param {Function} success 轮播成功回调
@param {String} animationDuration 动画完成时间，不适用动画设置为0即可
@param {String} animationTimingFunction 规定动画的速度曲线。
@param {String} animationDelay 何时开始动画
@param {Number} animationIterationCount 设置或返回动画的播放次数
@param {String} animationDirection 设置或返回是否循环交替反向播放动画
@param {String} animationFillMode 属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
```

## warn

设置切换页面时间不要小于动画继续时间
