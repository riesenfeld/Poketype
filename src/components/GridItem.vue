<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[isActive ? activeAnimation : '', gridItemColor]"
      @click="toggleModal"
    >
      <h3>{{ type.name }}</h3>
      <div class="info">
        <div class="info-section">
          <h4><Type :typeName="type.name" :typeColors="colors[type.name]" /> type Pokemon</h4>
          <div class="text"></div>
        </div>
        <div class="info-section">
          <h4>{{ type.name }} type Moves</h4>
          <div class="text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Type from "./Type.vue"
export default {
  name: "GridItem",
  components: {
    Type,
  },
  props: {
    /* The type data */
    type: Object,
    /* Window orientation */
    orientation: String,
    /* The colors mapped to each type */
    colors: Object,
  },
  data: function () {
    return {
      isActive: false,
    }
  },
  methods: {
    orientationIsPortrait() {
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
    colorText(str) {
      return str
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
     *  Computed and dynamically-bound styles
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
    gridItemColor() {
      return {
        backgroundColor: `${this.colors[this.type.name][0]}`,
        background: `linear-gradient(
          ${this.colors[this.type.name][1]},
          ${this.colors[this.type.name][0]},
          ${this.colors[this.type.name][2]})`,
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
  /* background-color: red; */
  /* border: 2px solid blue; */
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
