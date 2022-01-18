<template>
  <div id="app">
    <div
      id="modal-backdrop"
      :class="{ active: currentlyActiveGridItem > -1 || selectionModalIsActive }"
      @click=";[toggleModalBackdrop(-1), toggleBackdropForGenerationSelect(false)]"
    ></div>
    <NavBar
      :modalIsActive="currentlyActiveGridItem > -1"
      @selectionModalActivated="toggleBackdropForGenerationSelect(true)"
      @selectionChanged="switchGeneration"
    />
    <router-view
      :selectedGeneration="selectedGeneration"
      :currentlyActiveGridItem="currentlyActiveGridItem"
      @activeGridItemChanged="updateCurrentlyActiveGridItem"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  name: "App",
  components: {
    NavBar,
  },
  props: {},
  data() {
    return {
      selectedGeneration: "gen6",
      currentlyActiveGridItem: -1,
      selectionModalIsActive: false,
    }
  },
  methods: {
    switchGeneration(selected) {
      this.selectedGeneration = selected
      console.log("switchGeneration Fired. selectedGeneration: " + this.selectedGeneration)
    },
    updateCurrentlyActiveGridItem(value) {
      this.currentlyActiveGridItem = value
    },
    toggleModalBackdrop(id) {
      console.log(`toggleModalBackdrop called with id of ${id}`)
      if (id >= 0 && id < 18) {
        this.currentlyActiveGridItem = id
      } else {
        this.currentlyActiveGridItem = -1
      }
      return this.currentlyActiveGridItem
    },
    toggleBackdropForGenerationSelect(bool) {
      if (this.selectionModalIsActive != bool) {
        this.selectionModalIsActive = bool
      }
    },
  },
  watch: {
    currentlyActiveGridItem(val) {
      this.toggleModalBackdrop(val)
    },
  },
}
</script>
<style>
* {
  /* Simple reset */
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  overflow: hidden;
}
#modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  visibility: hidden;
  transition-duration: 0.5s;
}
#modal-backdrop.active {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0.5, 0.5, 0.5, 0.8);
  z-index: 2;
  visibility: visible;
}
</style>

<!--

DEFAULT STYLES FROM VUE-ROUTER

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
-->
