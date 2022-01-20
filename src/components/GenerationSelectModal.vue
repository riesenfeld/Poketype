<template>
  <div :class="[selectionModalIsActive ? 'selection-modal-active' : 'selection-modal-inactive']">
    <div class="generation-selection-explanation">
      <p>
        In the mainline Pokémon games, there have been two alterations to Pokémon types, both of
        which involved the addition of previously-absent types and interactions.
      </p>
      <br />
      <p>
        Most notably, Generation II (Gold and Silver) saw the addition of the Dark and Steel types,
        while Generation VI (X and Y) saw the introduction of the Fairy type. A few other, minor
        changes to type interactions were added with these generations as well.
      </p>
      <br />
      <p>
        Thus, you have three type interaction categories to choose from: Generation I, Generations
        II through V, and Generation VI and onward.
      </p>
    </div>
    <fieldset class="generation-selection-fieldset">
      <legend class="generation-selection-legend">Select a game generation:</legend>

      <button
        v-for="(gen, index) in generations"
        :key="index"
        :class="['selection-button', { 'selection-button-active': selected == gen.value }]"
        @click="switchGeneration(gen.value)"
      >
        <input
          type="radio"
          class="hidden-radio-button"
          name="radio-button"
          :value="gen.value"
          :checked="selected == gen.value"
          v-model="selected"
        />
        <label :for="gen.value">{{ aspectRatio > 1.5 ? gen.longText : gen.shortText }}</label>
      </button>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "GenerationSelectModal",
  props: {
    selectionModalIsActive: {
      type: Boolean,
      default: false,
    },
    aspectRatio: Number,
  },
  data() {
    return {
      selected: "gen6",
      generations: [
        {
          value: "gen1",
          longText: "Generation I",
          shortText: "Gen I",
        },
        {
          value: "gen2",
          longText: "Generation II - V",
          shortText: "Gen II - V",
        },
        {
          value: "gen6",
          longText: "Generation VI+",
          shortText: "Gen VI+",
        },
      ],
    }
  },
  methods: {
    switchGeneration(selected) {
      this.selected = selected
      this.$emit("selectionChanged", selected)
    },
    orientationIsLandscape() {
      return true
    },
    // Cookies may be implemented in Phase 2
    // writeCookie() {},
    // readCookie() {},
  },
}
</script>

<style scoped>
@keyframes display-modal {
  0% {
    display: none;
    visibility: hidden;
  }
  90% {
    display: none;
    visibility: hidden;
  }
  100% {
    display: block;
    visibility: visible;
  }
}

.selection-modal-inactive {
  /* position: absolute; */
  top: 1vh;
  left: 99vw;
  width: 0;
  height: 0;
  opacity: 0.5;
  font-size: 0;
  z-index: -1;
  overflow: hidden;
}

.selection-modal-inactive button {
  font-size: 0;
}

.selection-modal-active {
  position: absolute;
  top: 20vh;
  left: 20vw;
  width: 60vw;
  height: 60vh;
  opacity: 1;
  font-size: 0.9rem;
  z-index: 3;
  background-color: #222222;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  transition-duration: 0.3s;
  animation: display-modal 0.1s;
}

/* Not yet implemented */
.close-button {
  width: 3vw;
  height: 3vw;
  position: absolute;
  left: calc(100% - 3vw);
  z-index: 4;
  background-color: #00000000;
  font-size: 2vw;
}

.generation-selection-explanation {
  width: 90%;
}

.generation-selection-fieldset {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  height: 12%;
}
.generation-selection-legend {
  visibility: hidden;
  height: 0%;
  width: 0%;
}
.selection-button {
  width: 27%;
  height: 100%;
  border-radius: 2px;
  background-color: #bbbbbb;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}
.selection-button-active {
  width: 26.5%;
  height: 98%;
  background-color: #44aa44;
  box-shadow: none;
}

.hidden-radio-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

@media (orientation: portrait) {
  .selection-modal-active {
    top: 20vh;
    left: 5vw;
    width: 90vw;
    height: 60vh;
    font-size: 0.8rem;
  }
  .selection-button {
    height: 70%;
  }
}
</style>
