<template>
  <nav :class="{ 'nav-bar': true, 'behind-backdrop': modalIsActive }">
    <span v-if="this.$route.name == 'Home'" class="nav-item nav-link-wrapper">
      <router-link to="/about" id="nav-link-about" class="nav-link">About</router-link>
    </span>
    <span v-if="this.$route.name == 'About'" class="nav-item nav-link-wrapper">
      <router-link to="/" id="nav-link-home" class="nav-link">Home</router-link>
    </span>
    <span class="nav-item nav-logo-wrapper">
      <img src="@/assets/logo.svg" class="logo" />
    </span>
    <span class="nav-item nav-select-wrapper">
      <select
        v-if="this.$route.name == 'Home'"
        v-model="selected"
        id="generation-select"
        name="generation-select"
      >
        <option value="gen6">Generation VI+</option>
        <option value="gen2">Generation II - V</option>
        <option value="gen1">Generation I</option>
      </select>
    </span>
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: #333333;
  color: #cccccc;
}

.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
}
.nav-link-wrapper {
  width: 25%;
}
.nav-select-wrapper {
  width: 25%;
}
.nav-logo-wrapper {
  width: 50%;
}
.logo {
  height: 50%;
  filter: brightness(0);
}

#generation-select {
  /* Slightly larger than the default width of a <select> element
      containing the text "Generation II - V" */
  width: 7.8rem;
  /* display: inline-block; */
}
/* Replace the <select> in the nav when not on the home page
    to keep the other items from shifting on navigation between pages */
/* #dummy-nav-item {
  width: 7.8rem;
} */
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
