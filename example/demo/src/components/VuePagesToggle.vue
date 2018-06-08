<template>
  <div>
    <pages-toggle :pages-keys-active-style="{'background':'#0f0'}" :swipe-time="3000" animation-duration="2s">
      <pages-toggle-panel>
        <div class="demo demo1">
          <h3>第1屏</h3>
          <p>7年前，上合组织诞生于上海黄浦江畔，欧亚大陆出现一个崭新的区域性多边合作组织。</p>
        </div>
      </pages-toggle-panel>
      <pages-toggle-panel>
        <div class="demo demo2">
          <h3>第2屏</h3>
          <p>从最初的6个成员国发展到现在的8个成员国、4个观察员国、6个对话伙伴，上合组织发展道路越走越宽，务实合作成果越来越多，国际影响越来越大。</p>
        </div>
      </pages-toggle-panel>
      <pages-toggle-panel>
        <div class="demo demo3">
          <h3>第3屏</h3>
          <p>“互信、互利、平等、协商、尊重多样文明、谋求共同发展”，同上合组织相伴而生的“上海精神”如同一座高耸的灯塔，为上合组织持续发展指引方向。</p>
        </div>
      </pages-toggle-panel>
      <pages-toggle-panel>
        <div class="demo demo4">
          <h3>第4屏</h3>
          <p>新时代、新气象、新作为。扩员后再次回到诞生地中国，上合组织青岛峰会更具继往开来的特殊意味，承载着各方的美好期待。</p>
        </div>
      </pages-toggle-panel>
    </pages-toggle>
  </div>
</template>
<style>
.demo {
  display: table-cell;
  width: 100vw;
  height: 100vh;
  color: #fff;
  vertical-align: middle;
  text-align: center;
  letter-spacing: 0.2rem;
  font-size: 18px;
}

.demo1 {
  background: #ce2caa;
}

.demo2 {
  background: #302cce;
}

.demo3 {
  background: #cace2c;
}

.demo4 {
  background: #ce7f2c;
}
</style>
