<template>
  <div class="pages-toggle__panel">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@keyframes mymove {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

.pages-toggle__panel {
  display: none;
  overflow: hidden;
  width: 100%;
  height: 100%;
  animation: mymove 4s ease-in-out;
}
</style>
