<template>
  <div class="grid-item" :style="[isActive ? active : passive]" @click="toggleModal">
    <!-- <h1>THIS IS A GRID ITEM: {{ type.name }}</h1> -->
    <p>{{ isActive }}</p>
  </div>
</template>

<script>
export default {
  /***
   *
   *    The outer component needs to keep track of the modal because
   *    only one grid item may be active at a time!
   *    Either:
   *    1. Emit an event from here, or
   *    2. Send props down from Home (this is cleaner, i think)
   *
   */
  name: "GridItem",
  props: {
    /* The type data */
    type: Object,
    /* Width and height */
    dimensions: Array,
  },
  data: function () {
    return {
      isActive: false,
      /**
       *  The base dimensions of the inactive gridItem.
       *  Defined by mounted() lifecycle hook and updated by windowResizeHandler()
       */
      // passiveBoundingClientRect: null,
      /**
       *  The dimensions of the gridItem when it is expanded into a modal.
       *  Updated by windowResizeHandler()
       */
      // activeBoundingClientRect: null,
      /* The ID we will give to our resize timeout debouncing method so that it can be cleared */
      // resizeTimeoutIdentifier: null,
    }
  },
  methods: {
    toggleModal() {
      if (this.isActive) {
        this.isActive = false
      } else this.isActive = true

      return this.isActive
    },
    //  setBoundingClientRect() {
    //    /**
    //     * When passive, update passiveBoundingClientRect.
    //     * When active update activeBoundingClientRect.
    //     */
    //    if (this.isActive) {
    //      this.activeBoundingClientRect = this.$el.getBoundingClientRect()
    //      console.log(`setBoundingClientRect fired, component is active.`)
    //    } else {
    //      this.passiveBoundingClientRect = this.$el.getBoundingClientRect()
    //      console.log(`setBoundingClientRect fired, component is passive.`)
    //    }
    //  },
    //  windowResizeHandler() {
    //    /**
    //     * Debouncing the window resize event handler to aid performance
    //     * Reset the timer every time a window resize event fires,
    //     * and only call setBoundingClientRect() 100ms after the resizing is done.
    //     */
    //    clearTimeout(this.resizeTimeoutIdentifier)
    //    this.resizeTimeoutIdentifier = setTimeout(this.setBoundingClientRect, 100)
    //  },
  },
  computed: {
    /**
     *  Dynamically-bound styles
     * */
    active() {
      /* For testing */
      // let rect = this.passiveBoundingClientRect
      // console.log(`x: ${rect.x}, y: ${rect.y}, width ${rect.width}, height ${rect.height}`)
      return {
        backgroundColor: "green",
        transform: "scale(1.5)",
      }
    },
    passive() {
      return {
        backgroundColor: "red",
      }
    },
  },
  mounted() {
    /* Record the initial dimensions of the component */
    //  this.passiveBoundingClientRect = this.$el.getBoundingClientRect()
    /* We DON'T want to trigger an update to this.boundingClientRect on each 
         page resize because the page can resize while an element*/
    //  window.addEventListener("resize", this.windowResizeHandler)
  },
  destroyed() {
    /* Not strictly necessary here, but is good practice in general */
    //  window.addEventListener("resize", this.windowResizeHandler)
  },
}
</script>

<style scoped>
.grid-item {
  background-color: blue;
  border: 2px solid blue;
  transition-duration: 0.5s;
  /* Ensure that the grid items remain square and never overflow the page */
  width: 14vw;
  height: 14vw;
  max-width: 28vh;
  max-height: 28vh;
}

@media (orientation: portrait) {
  .grid-item {
    width: 28vw;
    height: 28vw;
    max-width: 14vh;
    max-height: 14vh;
  }
}
/* .active {
} */
</style>
