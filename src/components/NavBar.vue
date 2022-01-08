<template>
  <nav :class="{ 'nav-bar': true, 'behind-backdrop': modalIsActive }">
    <h5>THIS IS A NAVBAR</h5>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    modalIsActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 10%;
  background-color: #333333;
  color: #cccccc;
}

.behind-backdrop {
  filter: blur(1.5px);
}

@media (orientation: portrait) {
  .nav-bar {
    width: 100%;
    height: 8%;
  }
}
</style>
