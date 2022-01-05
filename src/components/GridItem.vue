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
      let preTranslationRect = this.$el.getBoundingClientRect()
      let centerOfPage = {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2,
      }
      let modalBoundingRect = {
        width: document.documentElement.clientWidth * 0.6,
        height: document.documentElement.clientHeight * 0.6,
        centerX: preTranslationRect.x + (document.documentElement.clientWidth * 0.6) / 2,
        centerY: preTranslationRect.y + (document.documentElement.clientHeight * 0.6) / 2,
      }
      return {
        maxWidth: `${modalBoundingRect.width}px`,
        maxHeight: `${modalBoundingRect.height}px`,
        width: `${modalBoundingRect.width}px`,
        height: `${modalBoundingRect.height}px`,
        transform: `translate(${centerOfPage.x - modalBoundingRect.centerX}px, ${
          centerOfPage.y - modalBoundingRect.centerY
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
  /* max-width: 30vw;
  max-height: 30vh;
  width: 30vw;
  height: 30vh; */
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
