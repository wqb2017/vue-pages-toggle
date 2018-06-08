<template>
  <div class="pages-toggle">
    <div class="pages-toggle__body" ref="pagesBody">
      <slot></slot>
    </div>
    <div class="pages-toggle__keys" ref="pagesKeys" v-if="isPagesKeys">
      <pagesKeys @toggle="_toggle" v-bind="$props"></pagesKeys>
    </div>
  </div>
</template>
<script>
import pagesKeys from "./../../pages-keys";
export default {
  props: {
    //定位，默认定位上面
    position: {
      type: String,
    },
    //是否显示keys，默认显示
    isPagesKeys: {
      type: Boolean,
      default() {
        return true;
      }
    },
    //keys样式
    pagesKeysStyle: {
      type: [Object, Array]
    },
    //keys选中样式
    pagesKeysActiveStyle: {
      type: [Object, Array]
    },
    //是否启动键盘事件
    isUseKeydown: {
      type: Boolean
    },
    //轮播时间
    swipeTime: {
      type: Number
    },
    //动画完成时间
    animationDuration: {
      type: String,
      default() {
        return '4s';
      }
    },
    //规定动画的速度曲线。
    animationTimingFunction: {
      type: String,
      default() {
        return 'linear';
      }
    },
    //何时开始动画
    animationDelay: {
      type: String,
      default() {
        return '0s';
      }
    },
    //设置或返回动画的播放次数
    animationIterationCount: {
      type: Number,
      default() {
        return 1;
      }
    },
    //设置或返回是否循环交替反向播放动画
    animationDirection: {
      type: String,
      default() {
        return 'normal';
      }
    },
    //属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
    animationFillMode: {
      type: String,
      default() {
        return 'none';
      }
    }
  },
  components: {
    pagesKeys
  },
  data() {
    return {
      //panel信息
      pagesBodyData: {
        index: 0,//当前节点
        row: null//当前节点信息
      }
    }
  },
  methods: {
    /**
    * 显示对应内容
    */
    _showCurrentPanel() {
      let panelElement = this.$refs.pagesBody.children;
      for (var i = 0; i < panelElement.length; i++) {
        //隐藏所有panel内容
        panelElement[i].style.display = 'none';
        //当前panel和对应keys相等则显示
        if (i === this.pagesBodyData.index) {
          panelElement[this.pagesBodyData.index].style.display = 'block';
          this._setAnimation(panelElement[this.pagesBodyData.index]);
        }
      }
    },
    //设置动画
    _setAnimation(elm) {
      if (elm) {
        elm.style.animationDuration = this.animationDuration;
        elm.style.animationTimingFunction = this.animationTimingFunction;
        elm.style.animationDelay = this.animationDelay;
        elm.style.animationIterationCount = this.animationIterationCount;
        elm.style.animationDirection = this.animationDirection;
        elm.style.animationFillMode = this.animationFillMode;
      }
    },
    /**
     * 切换
     * @param {number} index 当前选中节点
     * @param {object} row 当前选中节点信息
     */
    _toggle(index) {
      this.pagesBodyData.index = index;
      this._showCurrentPanel();
      //切换回调
      this.$emit('success', index);
    }
  }
}
</script>
<style lang="scss" scoped>
.pages-toggle {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>

