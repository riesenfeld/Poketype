<template>
  <nav :class="{ 'nav-bar': true, 'behind-backdrop': modalIsActive }">
    <router-link to="/" class="nav-item nav-link"><h5>PokéType</h5></router-link>
    <router-link to="/about" class="nav-item nav-link">About</router-link>
    <select
      v-if="this.$route.name == 'Home'"
      v-model="selected"
      class="nav-item"
      id="generation-select"
      name="generation-select"
    >
      <option value="gen6">Generation VI+</option>
      <option value="gen2">Generation II - V</option>
      <option value="gen1">Generation I</option>
    </select>
    <span v-else id="dummy-nav-item"></span>
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

#generation-select {
  /* Slightly larger than the default width of a <select> element 
      containing the text "Generation II - V" */
  width: 7.8rem;
}
/* Replace the <select> in the nav when not on the home page 
    to keep the other items from shifting on navigation between pages */
#dummy-nav-item {
  width: 7.8rem;
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
