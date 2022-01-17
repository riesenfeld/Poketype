<template>
  <div class="grid-item-dummy">
    <div
      :class="{ 'grid-item': true, 'grid-item-active': isActive }"
      :style="[
        isActive ? activeAnimation : '',
        isActive ? activeGridItemColor : passiveGridItemColor,
      ]"
      v-on="!isActive ? { click: openModal } : {}"
    >
      <h3
        v-if="!isActive"
        :class="{ 'passive-header': true, blurred: isBehindBackdrop }"
        :style="{ activeGridItemID: !isActive }"
      >
        {{ type.name }}
      </h3>
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
    activeGridItemID: {
      type: Number,
      default: -1,
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
      let aspectRatio = document.documentElement.clientWidth / document.documentElement.clientHeight
      console.log(`aspect ratio: ${aspectRatio}`)
      if (this.orientation == "portrait") {
        return 80
      } else if (aspectRatio < 1.5) {
        return 80
      }
      return 60
    },
    /**
     *  Computed and dynamically-bound styles
     * */
    activeAnimation() {
      let preTranslationRect = this.$el.getBoundingClientRect()
      let modalHeight = this.modalWidth == 80 ? 70 : 60
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
  transition-duration: 0.5s;
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
.passive-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: multiply;
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
  animation: scale-text 0.5s;
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
