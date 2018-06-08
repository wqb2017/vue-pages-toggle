<template>
  <ul :class="['pages-keys',position]">
    <li :class="['pages-keys_item',{'is-active':selected == index}]" v-for="(item,index) in keysCount" :key="index" @click="_toggle(index,item)" :style="[pagesKeysStyle,selected == index?pagesKeysActiveStyle:'']">{{item}}</li>
  </ul>
</template>
<script>
export default {
  props: {
    //定位，默认定位上面
    position: {
      type: String,
      default() {
        return 'right';
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
    //是否启动键盘事件,默认不启动
    isUseKeydown: {
      type: Boolean,
      default() {
        return false;
      }
    },
    //轮播时间
    swipeTime: {
      type: Number,
      default() {
        return 2000;
      }
    }
  },
  data() {
    return {
      keysCount: 0,//key个数
      selected: 0,//当前选中节点
      timer: null,//定时器
    }
  },
  mounted() {
    //父节点
    let parentElement = this.$parent;
    //panel节点
    let panelElement = parentElement.$refs.pagesBody.children;
    //获取panel元素节点个数
    this.keysCount = panelElement.length;
    this._swipe();
    if (this.isUseKeydown) {
      document.addEventListener('keydown', this._keydown);
    }
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this._keydown);
  },
  methods: {
    //轮播
    _swipe() {
      clearTimeout(this.timer);
      console.log('====================================');
      console.log(new Date());
      console.log('====================================');
      //切换回调
      this.$emit('toggle', this.selected);
      this.timer = setTimeout(() => {
        this._goSwipe();
      }, this.swipeTime);
    },
    //向前轮播
    _goSwipe() {
      // 当前选中小于panel个数，当前选中++，否则当前选中重置到第一个
      if (this.selected < this.keysCount - 1) {
        this.selected++;
      } else {
        this.selected = 0;
      }
      this._swipe();
    },
    //向后轮播
    _backSwipe() {
      // 当前选中大于0，选中当前的上一个panel，否则选中最后一个panel
      if (this.selected > 0) {
        this.selected--;
      } else {
        this.selected = this.keysCount - 1;
      }
      this._swipe();
    },
    /**
    * 切换
    * @param {number} index 当前选中节点
    * @param {object} item 当前选中节点信息
    */
    _toggle(index, item) {
      this.selected = index;
      this._swipe(index, item);
    },
    //键盘事件
    _keydown(e) {
      //键盘code
      let keyCode = e.keyCode;
      //上左键37,38；下右键39,40切换不同的页面
      if (keyCode === 37 || keyCode === 38) {
        this._backSwipe();
      } else if (keyCode === 39 || keyCode === 40) {
        this._goSwipe();
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>

