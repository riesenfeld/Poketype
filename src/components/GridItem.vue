<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[isActive ? activeAnimation : '', gridItemColor]"
      @click="toggleModal"
    >
      <h3 v-if="!isActive" :class="['type-name', { 'show-text': !isActive }]">
        <Type :typeName="type.name" :typeColors="colors[type.name]" />
      </h3>
      <div v-if="isActive" :class="['info', { 'show-text': isActive }]">
        <div class="info-section">
          <h4><Type :typeName="type.name" :typeColors="colors[type.name]" /> type Pokemon</h4>
          <div class="text">
            <p v-if="type.defendingNotVeryEffective.length > 0">
              Strong against attacks from
              <Type
                v-for="(item, index) in type.defendingNotVeryEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.defendingNotVeryEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.defendingSuperEffective.length > 0">
              Weak against attacks from
              <Type
                v-for="(item, index) in type.defendingSuperEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.defendingSuperEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.defendingNotEffective.length > 0">
              Invulnerable to attacks from
              <Type
                v-for="(item, index) in type.defendingNotEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.defendingNotEffective.length - 1 - index"
              />
            </p>
          </div>
        </div>
        <div class="info-section">
          <h4><Type :typeName="type.name" :typeColors="colors[type.name]" /> type Moves</h4>
          <div class="text">
            <p v-if="type.attackingNotVeryEffective.length > 0">
              Not very effective against
              <Type
                v-for="(item, index) in type.attackingNotVeryEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.attackingNotVeryEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.attackingSuperEffective.length > 0">
              Super effective against
              <Type
                v-for="(item, index) in type.attackingSuperEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.attackingSuperEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.attackingNotEffective.length > 0">
              Completely ineffective against
              <Type
                v-for="(item, index) in type.attackingNotEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.attackingNotEffective.length - 1 - index"
              />
            </p>
          </div>
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
/**
 * @keyframes pop-in
 * Used when text appears on a modal to prevent it from showing until 
 * the moment the modal is at full size. This keeps the text from rearranging
 * as the modal size increases during its transition.
 */
/* @keyframes pop-in {
  0% {
    visibility: hidden;
  }
  90% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
} */
/**
 * @keyframes pop-in
 * Ensures that the modal text disappears immediately during a transition,
 * preventing showing text rearranging as the modal shrinks back down into the grid.
 */
/* @keyframes pop-out {
  0% {
    visibility: visible;
  }
  1% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
} */

@keyframes scale-text {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  75% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.show-text .info-section {
  animation: scale-text 0.4s;
}
.hide-text {
}
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

.type-name {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
