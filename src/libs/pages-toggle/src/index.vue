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
  mounted() {
    this._showCurrentPanel();
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
        }
      }
    },
    /**
     * 切换
     * @param {number} index 当前选中节点
     * @param {object} row 当前选中节点信息
     */
    _toggle(index, row) {
      this.pagesBodyData.index = index;
      this.pagesBodyData.row = row;
      this._showCurrentPanel();
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

