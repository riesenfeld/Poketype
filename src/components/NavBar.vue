<template>
  <nav class="nav-bar">
    <h5>THIS IS A NAVBAR</h5>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 10%;
  background-color: #333333;
  color: #cccccc;
}

@media (orientation: portrait) {
  .nav-bar {
    width: 100%;
    height: 8%;
  }
}
</style>
