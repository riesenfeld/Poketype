<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[isActive ? activeAnimation : '']"
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
    }
  },
  methods: {
    toggleModal() {
      if (this.isActive) {
        this.isActive = false
      } else this.isActive = true
      /* Let the Home component know to toggle the modal backdrop */
      this.$emit("modalToggled")
      return this.isActive
    },
  },
  computed: {
    /**
     *  Dynamically-bound styles
     * */
    activeAnimation() {
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
        transform: `translate(${centerOfPage.x - centerOfGridItem.x}px, ${
          centerOfPage.y - centerOfGridItem.y
        }px)`,
      }
    },
  },
}
</script>

<style scoped>
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
  transition-duration: 0.5s;
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
</style>
