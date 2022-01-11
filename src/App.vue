<template>
  <div id="app">
    <Home :typesByGeneration="typesByGeneration" />
  </div>
</template>

<script>
import Home from "./components/Home.vue"
import pokemonTypesGen6 from "./data/PokemonTypesGen6.js"
import pokemonTypesGen2 from "./data/PokemonTypesGen2.js"
import pokemonTypesGen1 from "./data/PokemonTypesGen1.js"

export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      typesByGeneration: {
        gen1: pokemonTypesGen1,
        gen2: pokemonTypesGen2,
        gen6: pokemonTypesGen6,
      },
    }
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
