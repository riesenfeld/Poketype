<template>
  <div id="app">
    <NavBar :modalIsActive="currentlyActiveGridItem > -1" @selectionChanged="switchGeneration" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view
      :selectedGeneration="selectedGeneration"
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
  // data() {
  //   return {
  //     typesByGeneration: {
  //       gen1: pokemonTypesGen1,
  //       gen2: pokemonTypesGen2,
  //       gen6: pokemonTypesGen6,
  //     },
  //   }
  // },
  props: {},
  data() {
    return {
      selectedGeneration: "gen6",
      currentlyActiveGridItem: -1,
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
