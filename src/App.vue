<template>
  <div id="app">
    <pagesToggle position="top" :pagesKeysActiveStyle="{'background':'#0f0'}">
      <pagesTogglePanel>
        <img src="./imgs/basic-platform.jpg" alt="">
      </pagesTogglePanel>
      <pagesTogglePanel>
        <img src="./imgs/car-after-service.jpg" alt="">
      </pagesTogglePanel>
      <pagesTogglePanel>
        <img src="./imgs/financial-platform.jpg" alt="">
      </pagesTogglePanel>
      <pagesTogglePanel>
        <img src="./imgs/open-platform.jpg" alt="">
      </pagesTogglePanel>
    </pagesToggle>
  </div>
</template>
<script>
import { pagesToggle, pagesTogglePanel } from "./libs/index";
export default {
  name: 'app',
  components: {
    pagesToggle,
    pagesTogglePanel
  },
}
</script>

