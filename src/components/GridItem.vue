<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[
        isActive ? activeAnimation : '',
        isActive ? activeGridItemColor : passiveGridItemColor,
      ]"
      @click="toggleModal"
    >
      <h3 v-if="!isActive" class="passive-header">
        {{ type.name }}
      </h3>
      <div v-if="isActive" :class="['info', { 'show-text': isActive }]">
        <div class="info-section">
          <h4 class="info-section-header">
            <Type :typeName="type.name" :typeColors="colors[type.name]" />
            <span class="plain-text"> type Pokemon</span>
          </h4>
          <div class="info-section-text">
            <p v-if="type.defendingNotVeryEffective.length > 0">
              <span class="plain-text">Strong against attacks from </span>
              <Type
                v-for="(item, index) in type.defendingNotVeryEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.defendingNotVeryEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.defendingSuperEffective.length > 0">
              <span class="plain-text">Weak against attacks from </span>
              <Type
                v-for="(item, index) in type.defendingSuperEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.defendingSuperEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.defendingNotEffective.length > 0">
              <span class="plain-text">Invulnerable to attacks from </span>
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
          <h4 class="info-section-header">
            <Type :typeName="type.name" :typeColors="colors[type.name]" />
            <span class="plain-text"> type Moves </span>
          </h4>
          <div class="info-section-text">
            <p v-if="type.attackingNotVeryEffective.length > 0">
              <span class="plain-text">Not very effective against </span>
              <Type
                v-for="(item, index) in type.attackingNotVeryEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.attackingNotVeryEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.attackingSuperEffective.length > 0">
              <span class="plain-text">Super effective against </span>
              <Type
                v-for="(item, index) in type.attackingSuperEffective"
                :key="index"
                :typeName="item"
                :typeColors="colors[item]"
                :delimiter="type.attackingSuperEffective.length - 1 - index"
              />
            </p>
            <p v-if="type.attackingNotEffective.length > 0">
              <span class="plain-text">Completely ineffective against </span>
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
import colors from "../data/SwordAndShieldColors.js"
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
    /* Whether this GridItem is active, kept track of in the parent Home component */
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      /* The colors mapped to each type */
      colors,
    }
  },
  methods: {
    orientationIsPortrait() {
      return this.orientation == "portrait"
    },
    toggleModal() {
      if (!this.isActive) {
        /**
         * Send a signal to the parent to flip isActive to true for this gridItem,
         * thereby activating this item and the backdrop.
         */
        this.$emit("modalOn")
      }
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
    passiveGridItemColor() {
      return {
        background: `linear-gradient(
          ${this.colors[this.type.name][0]}EE,
          ${this.colors[this.type.name][2]}EE,
          ${this.colors[this.type.name][0]}EE)`,
        color: this.colors[this.type.name][1],
      }
    },
    activeGridItemColor() {
      return {
        background: `linear-gradient(
          ${this.colors[this.type.name][0]}FF,
          ${this.colors[this.type.name][2]}FF,
          ${this.colors[this.type.name][0]}FF)`,
        color: this.colors[this.type.name][1],
      }
    },
  },
  watch: {
    /* For Testing */
    // isActive(val) {
    //   console.log("isActive: " + val)
    // },
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
/* .hide-text {
} */
.grid-item-dummy {
  width: 14vw;
  height: 14vw;
  max-width: 28vh;
  max-height: 28vh;
}
.grid-item {
  /* Ensure that the grid items remain square and never overflow the page */
  width: 14vw;
  height: 14vw;
  max-width: 28vh;
  max-height: 28vh;
  transition-duration: 0.5s;
}
.grid-item-active {
  position: absolute;
  z-index: 3;
}

.passive-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: multiply;
}

.info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-section {
  /* Keeps both info-sections the same length along the main track */
  flex-basis: 100%;
  height: 94%;
}

.show-text .info-section {
  animation: scale-text 0.4s;
}

.info-section-header {
  font-weight: normal;
  font-size: 1.2rem;
  /* margin: 3vh 0vw 1vh 0vw; */
  /* text-align: center; */
}

.info-section-text p {
  margin-top: 2vh;
}
/* All the text on an active or inactive grid item except for Type components */
.plain-text {
  mix-blend-mode: multiply;
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
  .info {
    flex-direction: column;
  }
}
</style>
