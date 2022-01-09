<template>
  <div class="home">
    <div
      id="modal-backdrop"
      :class="{ active: currentlyActiveGridItem > -1 }"
      @click="toggleModalBackground(-1)"
    ></div>
    <NavBar :modalIsActive="currentlyActiveGridItem > -1" />
    <div id="vertical-centering-flexbox">
      <div id="horizontal-centering-flexbox">
        <main id="container">
          <GridItem
            v-for="type in pokemonTypes"
            :key="type.id"
            :type="type"
            :orientation="orientation"
            :isActive="currentlyActiveGridItem == type.id"
            :activeGridItemID="currentlyActiveGridItem"
            @modalOn="toggleModalBackground(type.id)"
            @modalOff="toggleModalBackground(-1)"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"
import GridItem from "./GridItem.vue"
import pokemonTypesGen6 from "../data/PokemonTypesGen6.js"
import pokemonTypesGen2 from "../data/PokemonTypesGen2.js"
import pokemonTypesGen1 from "../data/PokemonTypesGen1.js"

export default {
  name: "Home",
  components: {
    NavBar,
    GridItem,
  },
  props: {},
  data: function () {
    return {
      typesByGeneration: {
        gen1: pokemonTypesGen1,
        gen2: pokemonTypesGen2,
        gen6: pokemonTypesGen6,
      },
      pokemonTypes: pokemonTypesGen6,
      /* The ID of the active grid item, -1 when no grid item is active */
      currentlyActiveGridItem: -1,
      /* The current orientation of the window or device */
      orientation: null,
    }
  },
  methods: {
    updateOrientation(bool) {
      if (bool) {
        this.orientation = "portrait"
      } else {
        this.orientation = "landscape"
      }
    },
    toggleModalBackground(id) {
      if (id >= 0) {
        this.currentlyActiveGridItem = id
      } else {
        this.currentlyActiveGridItem = -1
      }
      return this.currentlyActiveGridItem
    },
  },
  mounted() {
    /* Get and update the window's orientation */
    var mediaQueryList = window.matchMedia("(orientation: portrait)")
    this.updateOrientation(mediaQueryList.matches)
    /* Bring the event handler into scope for addEventListener */
    let updateOrientation = this.updateOrientation
    /* Listen for changes to orientation */
    mediaQueryList.addEventListener("change", function (mql) {
      updateOrientation(mql.matches)
    })
  },
}
</script>

<style scoped>
/**
*   LANDSCAPE ORIENTATION AND DEFAULT STYLES
*/
.home {
  height: 100vh;
  background-color: #222222;
}
#modal-backdrop {
  position: absolute;
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
#vertical-centering-flexbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%; /* viewport height - navbar height */
}
#horizontal-centering-flexbox {
  display: flex;
  justify-content: center;
  width: 100%;
}
#container {
  /* Making sure height is always half with width without flowing over the page */
  /* [width, height] = [84vw, 42vw]. [max-width, max-height] = [168vh, 84vh].  */
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

@media (orientation: portrait) {
  #vertical-centering-flexbox {
    height: 92%; /* viewport height - navbar height */
  }
  #container {
    /* Making sure height is always twice with width without flowing over the page */
    /* [width, height] = [42vh, 84vh]. [max-width, max-height] = [84vw, 168vw].  */
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
