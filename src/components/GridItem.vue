<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[isActive ? activeAnimation : passiveAnimation]"
      @click="toggleModal"
    >
      <p>{{ isActive }}</p>
    </div>
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
    activeAnimation() {
      /* For testing */
      // let rect = this.passiveBoundingClientRect
      let rect = this.$el.getBoundingClientRect()
      let centerOfGridItem = {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      }
      let centerOfPage = {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2,
      }
      console.log(`x: ${rect.x}, y: ${rect.y}, width ${rect.width}, height ${rect.height}`)
      console.log(`item center: ${centerOfGridItem.x}, ${centerOfGridItem.y}`)
      console.log(`page center: ${centerOfPage.x}, ${centerOfPage.y}`)
      return {
        //   backgroundColor: "green",
        //   //   zIndex: 5,
        transform: `translate(${centerOfPage.x - centerOfGridItem.x}px, ${
          centerOfPage.y - centerOfGridItem.y
        }px)`,
        //   position: "relative",
        //   //   width: "75vw",
        //   //   height: "75vh",
        //   transitionDuration: "1s",
      }
    },
    passiveAnimation() {
      return {
        //   backgroundColor: "red",
        //   transitionDuration: "1s",
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
/* @keyframes activate {
  0%;
} */
.grid-item-dummy {
  width: 14vw;
  height: 14vw;
  max-width: 28vh;
  max-height: 28vh;
}
.grid-item {
  /* position: relative; */
  background-color: red;
  border: 2px solid blue;
  /* Ensure that the grid items remain square and never overflow the page */
  width: 14vw;
  height: 14vw;
  max-width: 28vh;
  max-height: 28vh;
  /* top: initial; */
  /* left: initial; */
  /* margin: 0; */
  transition: 1s;
}
.grid-item-active {
  border-color: violet;
  background-color: green;
  position: absolute;
  max-width: 30vw;
  max-height: 30vh;
  width: 30vw;
  height: 30vh;
  z-index: 3;
  /* transform: translate(-200px, -200px); */
  /* margin: 35vh 35vw 35vh 35vw; */
  /* top: 35vh; */
  /* left: 35vw; */
  /* transition-duration: 1s; */
  /* transition: all 1s; */
}

@media (orientation: portrait) {
  .grid-item-dummy {
    width: 28vw;
    height: 28vw;
    max-width: 14vh;
    max-height: 14vh;
  }
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
