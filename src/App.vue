<template>
  <div id="app">
    <div
      id="modal-backdrop"
      :class="{ active: currentlyActiveGridItem > -1 || selectionModalIsActive }"
      @click=";[toggleModalBackdrop(-1), toggleBackdropForGenerationSelect(false)]"
    ></div>
    <NavBar
      :modalIsActive="currentlyActiveGridItem > -1"
      :selectionModalIsActive="selectionModalIsActive"
      :aspectRatio="aspectRatio"
      :singlePage="singlePage"
      @selectionModalActivated="toggleBackdropForGenerationSelect(true)"
      @selectionChanged="switchGeneration"
    />
    <router-view
      :selectedGeneration="selectedGeneration"
      :currentlyActiveGridItem="currentlyActiveGridItem"
      :aspectRatio="aspectRatio"
      :pageDimensions="pageDimensions"
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
      /* Removes router-link to the about page when true. Passed in as a prop to <NavBar> */
      singlePage: false,
      selectedGeneration: "gen6",
      currentlyActiveGridItem: -1,
      selectionModalIsActive: false,
      /* The current aspect ratio -- used for modals */
      aspectRatio: visualViewport.width / visualViewport.height,
      pageDimensions: {
        width: Math.min(document.documentElement.clientWidth, visualViewport.width),
        height: Math.min(document.documentElement.clientHeight, visualViewport.height),
      },
      /* Used for debouncing the vieport resize handler attached in mounted() */
      resizeTimeoutIdentifier: null,
    }
  },
  methods: {
    switchGeneration(selected) {
      this.selectedGeneration = selected
    },
    updateCurrentlyActiveGridItem(value) {
      this.currentlyActiveGridItem = value
    },
    toggleModalBackdrop(id) {
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
    setAspectRatio(dimensions) {
      /**
       *  Update information about the page's dimensions
       *  Sometimes visualViewport > documentElement and sometimes the other way around
       *  We always want to take whichever is smaller to ensure a good fit
       * */
      this.pageDimensions.width = dimensions.width
      this.pageDimensions.height = dimensions.height
      this.aspectRatio = dimensions.width / dimensions.height
      console.log(`width: ${this.pageDimensions.width}`)
      console.log(`height: ${this.pageDimensions.height}`)
      console.log(`ratio: ${this.aspectRatio}`)
    },
    handleResize(e) {
      clearTimeout(this.resizeTimeoutIdentifier)
      let dimensions = {
        width: Math.min(document.documentElement.clientWidth, e.target.width),
        height: Math.min(document.documentElement.clientHeight, e.target.height),
      }
      this.resizeTimeoutIdentifier = setTimeout(this.setAspectRatio, 50, dimensions)
    },
  },
  watch: {
    currentlyActiveGridItem(val) {
      this.toggleModalBackdrop(val)
    },
  },
  mounted() {
    this.pageDimensions.width = Math.min(document.documentElement.clientWidth, visualViewport.width)
    this.pageDimensions.height = Math.min(
      document.documentElement.clientHeight,
      visualViewport.height
    )
    /* Get and update the vieports's current aspect ratio */
    this.aspectRatio = this.pageDimensions.width / this.pageDimensions.height
    /* Do this on every time the viewport is resized */
    visualViewport.addEventListener("resize", this.handleResize)
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
  overflow: hidden;
}
#modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  visibility: hidden;
  transition-duration: 0.5s;
}
#modal-backdrop.active {
  position: absolute;
  width: 100%;
  /* Height 100% doesn't take the URL bar into account while 100vh does.
     (https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser) */
  height: 100vh;
  background-color: rgba(0.5, 0.5, 0.5, 0.8);
  z-index: 2;
  visibility: visible;
}
</style>
