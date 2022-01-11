<template>
  <div class="home">
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
            @modalOn="handleModalActivation(type.id)"
            @modalOff="handleModalActivation(-1)"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import GridItem from "@/components/GridItem.vue"

export default {
  name: "Home",
  components: {
    // NavBar,
    GridItem,
  },
  props: {
    typesByGeneration: Object,
    selectedGeneration: {
      type: String,
      default: "gen6",
    },
    /* The ID of the active grid item, -1 when no grid item is active */
    currentlyActiveGridItem: {
      type: Number,
      default: -1,
    },
  },
  data: function () {
    return {
      // pokemonTypes: this.typesByGeneration[this.selectedGeneration],
      pokemonTypes: this.typesByGeneration[this.selectedGeneration],
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
    switchGeneration(selected) {
      this.pokemonTypes = this.typesByGeneration[selected]
    },
    handleModalActivation(id) {
      this.$emit("activeGridItemChanged", id)
      return this.currentlyActiveGridItem
    },
  },
  watch: {
    selectedGeneration(selected) {
      this.pokemonTypes = this.typesByGeneration[selected]
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
  height: 90vh; /* viewport height - navbar height */
  background-color: #222222;
}
#vertical-centering-flexbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
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
  .home {
    height: 92vh; /* viewport height - navbar height */
  }
  #container {
    /* Making sure height is always twice with width without flowing over the page */
    /* [width, height] = [42vh, 84vh]. [max-width, max-height] = [84vw, 168vw].  */
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
