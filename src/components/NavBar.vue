<template>
  <nav :class="{ 'nav-bar': true, 'behind-backdrop': modalIsActive }">
    <router-link to="/"><h5>PokéType</h5></router-link>
    <router-link to="/about">About</router-link> |
    <select v-model="selected" id="generation-select" name="generation-select">
      <option value="gen6">Generation VI+</option>
      <option value="gen2">Generation II - V</option>
      <option value="gen1">Generation I</option>
    </select>
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
  data() {
    return {
      selected: "gen6",
    }
  },
  watch: {
    selected(val) {
      this.$emit("selectionChanged", val)
    },
  },
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #333333;
  color: #cccccc;
}

.behind-backdrop {
  filter: blur(1.5px);
}

@media (orientation: portrait) {
  .nav-bar {
    width: 100%;
    height: 8vh;
  }
}
</style>
