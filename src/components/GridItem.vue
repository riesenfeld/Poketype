<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[
        isActive && orientation == 'landscape'
          ? activeAnimation
          : isActive && orientation == 'portrait'
          ? activeAnimation
          : '',
      ]"
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
      // modalWidth: this.orientation == "portait" ? 80 : 60,
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
      // let centerOfPage = {
      //   x: document.documentElement.clientWidth / 2,
      //   y: document.documentElement.clientHeight / 2,
      // }
      // let modalBoundingRect = {
      //   width: document.documentElement.clientWidth * 0.6,
      //   height: document.documentElement.clientHeight * 0.6,
      //   centerX: preTranslationRect.x + (document.documentElement.clientWidth * 0.6) / 2,
      //   centerY: preTranslationRect.y + (document.documentElement.clientHeight * 0.6) / 2,
      // }

      // let modalWidth = 60
      // if (this.orientationIsPortrait()) {
      //   modalWidth = 80
      // }

      let modalHeight = 60
      let centerX = this.convertPxToVu(preTranslationRect.x, "width") + this.modalWidth / 2
      let centerY = this.convertPxToVu(preTranslationRect.y, "height") + modalHeight / 2
      // let portraitModalWidth = 80
      // let portraitModalHeight = 60
      // let portraitCenterX = this.convertPxToVu(preTranslationRect.x, "width") + modalWidth / 2
      // let portraitCenterY = this.convertPxToVu(preTranslationRect.y, "height") + modalHeight / 2
      // console.log(
      //   `preTranslationRect coords: [${this.convertPxToVu(
      //     preTranslationRect.x,
      //     "width"
      //   )}, ${this.convertPxToVu(preTranslationRect.y, "height")}]`
      // )
      // console.log(`centerX: ${centerX}vw`)
      // console.log(`centerY: ${centerX}vh`)
      // console.log(`translation vector: [${50 - centerX}vw, ${50 - centerY}vh]`)
      console.log(`modal width: ${this.modalWidth}vw`)
      console.log(`orientation: ${this.orientation}`)
      return {
        maxWidth: `${this.modalWidth}vw`,
        maxHeight: `${modalHeight}vh`,
        width: `${this.modalWidth}vw`,
        height: `${modalHeight}vh`,
        transform: `translate(${50 - centerX}vw, ${50 - centerY}vh)`,
        // "@media (orientation: portrait)": {
        //   maxWidth: `${portraitModalWidth}vw`,
        //   maxHeight: `${portraitModalHeight}vh`,
        //   width: `${portraitModalWidth}vw`,
        //   height: `${portraitModalHeight}vh`,
        //   transform: `translate(${50 - portraitCenterX}vw, ${50 - portraitCenterY}vh)`,
        // },
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
