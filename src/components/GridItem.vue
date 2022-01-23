<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[
        isActive ? activeAnimation() : '',
        isActive ? activeGridItemColor : passiveGridItemColor,
      ]"
      v-on="!isActive && type.existsInThisGen ? { click: openModal } : {}"
    >
      <div
        v-if="!isActive"
        :class="[
          type.existsInThisGen ? 'passive-content' : 'passive-content-not-in-generation',
          { blurred: isBehindBackdrop },
        ]"
      >
        <h3 :class="{ 'not-in-generation-header': !type.existsInThisGen }">
          {{ type.name }}
        </h3>
        <p v-if="!isActive && !type.existsInThisGen" class="not-in-generation-message">
          Does not exist in this generation
        </p>
      </div>
      <button
        id="modal-close-button"
        v-if="isActive"
        class="close-button"
        :style="modalCloseButtonColor"
        @click="closeModal"
      >
        <div class="close-button-symbol">&#x00D7;</div>
      </button>
      <div v-if="isActive" :class="['info', { 'animate-text': isActive }]">
        <div class="info-section left-top-section">
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
            <hr v-if="type.defendingSuperEffective.length > 0" class="section-text-separator" />
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
            <hr v-if="type.defendingNotEffective.length > 0" class="section-text-separator" />
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
        <hr class="section-separator" />
        <div class="info-section right-bottom-section">
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
            <hr v-if="type.attackingSuperEffective.length > 0" class="section-text-separator" />
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
            <hr v-if="type.attackingNotEffective.length > 0" class="section-text-separator" />
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
const unavailableGridItem = require("@/assets/unavailableGridItem.svg")

export default {
  name: "GridItem",
  components: {
    Type,
  },
  props: {
    /* The type data */
    type: Object,
    /* visualViewport aspect ratio */
    aspectRatio: Number,
    /* Whether this GridItem is active, kept track of in the parent Home component */
    isActive: {
      type: Boolean,
      default: false,
    },
    activeGridItemID: {
      type: Number,
      default: -1,
    },
  },
  data: function () {
    return {
      /* The colors mapped to each type */
      colors,
      modalDimensions: this.calculateModalDimensions(this.aspectRatio),
      boundingClientRect: null,
    }
  },
  methods: {
    openModal() {
      if (!this.isActive) {
        /**
         * Send a signal to the parent to flip isActive to true for this gridItem,
         * thereby activating this item and the backdrop.
         */
        this.$emit("modalOn")
      }
      return this.isActive
    },
    closeModal() {
      if (this.isActive) {
        this.$emit("modalOff")
      }
      return this.isActive
    },
    /* Convert viewport units to pixel units */
    convertVuToPx(viewportUnit, axis) {
      /* Height and width of the page in px */
      let pageWidth = document.documentElement.clientWidth
      let pageHeight = document.documentElement.clientHeight
      if (axis == "horizontal") {
        return (viewportUnit / 100) * pageWidth
      } else {
        return (viewportUnit / 100) * pageHeight
      }
    },
    /* The dimensions of the modal are different for landscape and portrait orientations */
    calculateModalDimensions(aspectRatio) {
      /* If viewport is portait OR just a little bit wider than a square */
      if (aspectRatio < 1.5) {
        return {
          width: 80,
          height: 70,
        }
      } else if (aspectRatio > 1.95) {
        return {
          width: 60,
          height: 80,
        }
      } else if (aspectRatio > 1.7) {
        return {
          width: 60,
          height: 70,
        }
      } else
        return {
          width: 60,
          height: 60,
        }
    },
    activeAnimation() {
      let preTranslationRect = this.boundingClientRect
      let modalWidth = this.convertVuToPx(this.modalDimensions.width, "horizontal")
      let modalHeight = this.convertVuToPx(this.modalDimensions.height, "vertical")
      let centerX = preTranslationRect.x + modalWidth / 2
      let centerY = preTranslationRect.y + modalHeight / 2
      let pageCenterX = document.documentElement.clientWidth / 2
      let pageCenterY = document.documentElement.clientHeight / 2
      return {
        maxWidth: `${modalWidth}px`,
        maxHeight: `${modalHeight}px`,
        width: `${modalWidth}px`,
        height: `${modalHeight}px`,
        transform: `translate(${pageCenterX - centerX}px, ${pageCenterY - centerY}px)`,
      }
    },
  },
  computed: {
    /**
     *  Computed and dynamically-bound styles
     * */
    passiveGridItemColor() {
      if (this.type.existsInThisGen) {
        return {
          background: `linear-gradient(
          ${this.colors[this.type.name][0]}EE,
          ${this.colors[this.type.name][2]}EE,
          ${this.colors[this.type.name][0]}EE)`,
          color: this.colors[this.type.name][1],
        }
      } else {
        return {
          backgroundImage: `url(${unavailableGridItem}), 
          linear-gradient(
          ${this.colors[this.type.name][0]}EE,
          ${this.colors[this.type.name][2]}EE,
          ${this.colors[this.type.name][0]}EE)`,
          color: `${this.colors[this.type.name][1]}AA`,
        }
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
    modalCloseButtonColor() {
      return {
        color: `${this.colors[this.type.name][1]}FF`,
      }
    },
    isBehindBackdrop() {
      if (this.activeGridItemID > -1 && this.activeGridItemID != this.type.id) {
        return true
      }
      return false
    },
  },
  watch: {
    aspectRatio(val) {
      /* Update modalDimensions property any time vieport dimensions change */
      this.modalDimensions = this.calculateModalDimensions(val)
      /* Update boundingClientRect property (of dummy -- which holds its passive shape!) 
        any time viewport dimensions change */
      this.boundingClientRect = this.$el.getBoundingClientRect()
    },
  },
  mounted() {
    this.boundingClientRect = this.$el.getBoundingClientRect()
  },
}
</script>

<style scoped>
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
  transition-duration: 0.3s;
}
.grid-item-active {
  position: absolute;
  z-index: 3;
}
.close-button {
  width: 3vw;
  height: 3vw;
  position: absolute;
  left: calc(100% - 3vw);
  z-index: 4;
  background-color: #00000000;
  font-size: 2vw;
}
.close-button-symbol {
  height: 100%;
}
.passive-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  mix-blend-mode: multiply;
}

.passive-content-not-in-generation {
  width: 100%;
  height: 100%;
  /* 1/3 of grid item (can get away with a percentage padding-top because the parent is a square) */
  padding-top: 33.3%;
  mix-blend-mode: multiply;
}
.not-in-generation-header {
  /* 50% of the remaining 2/3 under the padding */
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.not-in-generation-message {
  /* 50% of the remaining 2/3 under the padding */
  height: 50%;
  font-size: 65%;
  text-align: center;
}

.blurred {
  filter: blur(1.5px);
}

.info {
  width: 100%;
  height: calc(100% - 2vh);
  margin-top: 2vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.info-section {
  width: 46%;
  height: 94%;
  line-height: 140%;
}

hr.section-separator {
  height: 100%;
  width: 1px;
  border-left: 1px dotted black;
}

.animate-text .info-section {
  animation: scale-text 0.3s;
}

.info-section-header {
  font-weight: normal;
  font-size: 2vw;
  text-align: center;
  margin-bottom: 3vw;
}

.info-section-text p {
  margin: 2vh 0vw 2vh 0vw;
}
hr.section-text-separator {
  width: 100%;
  height: 1px;
  border-bottom: 1px dotted black;
}
/* All the text on an active or inactive grid item except for Type components */
.plain-text {
  mix-blend-mode: multiply;
}
.info-section-text .plain-text {
  font-weight: bold;
}

@media (min-aspect-ratio: 2/1) {
  .info-section {
    font-size: 0.8rem;
  }
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
  .passive-content-not-in-generation {
    color: #aaaaaaaa;
    mix-blend-mode: color-dodge;
  }
  .close-button {
    width: 3vh;
    height: 3vh;
    left: calc(100% - 3vh);
    font-size: 2vh;
  }

  .info {
    height: 100%;
    margin: 0;
    flex-direction: column;
  }

  .info-section {
    width: 94%;
    height: 50%;
    line-height: 140%;
    font-size: 2vh;
  }
  hr.section-separator {
    height: 1px;
    width: 100%;
    border-top: 1px dotted black;
  }
  .info-section-header {
    font-size: 2.5vh;
    margin-top: 3vh;
  }
}
</style>
