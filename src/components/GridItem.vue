<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[isActive ? activeAnimation : '']"
      @click="toggleModal"
    >
      <p>{{ orientation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  props: {
    /* The type data */
    type: Object,
    /* Window orientation */
    orientation: String,
  },
  data: function () {
    return {
      isActive: false,
    }
  },
  methods: {
    orientationIsPortrait() {
      // return document.documentElement.clientWidth <= document.documentElement.clientHeight
      return this.orientation == "portrait"
    },
    toggleModal() {
      if (this.isActive) {
        this.isActive = false
      } else this.isActive = true
      /* Let the Home component know to toggle the modal backdrop */
      this.$emit("modalToggled")
      return this.isActive
    },
    /* Convert pixel units to viewport units */
    convertPxToVu(pixelValue, axis) {
      /* Height and width of the viewport (minus scrollbar) in px */
      let viewportWidth = document.documentElement.clientWidth
      let viewportHeight = document.documentElement.clientHeight
      if (axis == "width") {
        return (pixelValue / viewportWidth) * 100
      } else {
        return (pixelValue / viewportHeight) * 100
      }
    },
  },
  computed: {
    /* The dimensions of the modal are different for landscape and portrait orientations */
    modalWidth() {
      if (this.orientation == "portrait") {
        return 80
      } else return 60
    },
    /**
     *  Dynamically-bound styles
     * */
    activeAnimation() {
      let preTranslationRect = this.$el.getBoundingClientRect()
      let modalHeight = 60
      let centerX = this.convertPxToVu(preTranslationRect.x, "width") + this.modalWidth / 2
      let centerY = this.convertPxToVu(preTranslationRect.y, "height") + modalHeight / 2
      return {
        maxWidth: `${this.modalWidth}vw`,
        maxHeight: `${modalHeight}vh`,
        width: `${this.modalWidth}vw`,
        height: `${modalHeight}vh`,
        transform: `translate(${50 - centerX}vw, ${50 - centerY}vh)`,
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
