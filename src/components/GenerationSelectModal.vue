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
        <label :for="gen.value">{{ gen.text }}</label>
      </button>

      <!-- <button
        id="button-gen6"
        :class="['selection-button', { 'selection-button-active': selected == 'gen6' }]"
        @click="switchGeneration('gen6')"
      >
        <input
          type="radio"
          id="radio-gen6"
          class="hidden-radio-button"
          name="radio-button"
          value="gen6"
          checked
          v-model="selected"
        />
        <label for="gen6">Generation VI+</label>
      </button>
      <button
        id="button-gen2"
        :class="['selection-button', { 'selection-button-active': selected == 'gen2' }]"
        @click="switchGeneration('gen2')"
      >
        <input
          type="radio"
          id="radio-gen2"
          class="hidden-radio-button"
          name="radio-button"
          value="gen2"
          v-model="selected"
        />
        <label for="gen2">Generation II - V</label>
      </button>
      <button
        id="button-gen1"
        :class="['selection-button', { 'selection-button-active': selected == 'gen1' }]"
        @click="switchGeneration('gen1')"
      >
        <input
          type="radio"
          id="radio-gen1"
          class="hidden-radio-button"
          name="radio-button"
          value="gen1"
          v-model="selected"
        />
        <label for="gen1">Generation I</label>
      </button> -->
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
  },
  data() {
    return {
      selected: "gen6",
      generations: [
        {
          value: "gen1",
          text: "Generation I",
        },
        {
          value: "gen2",
          text: "Generation II - V",
        },
        {
          value: "gen6",
          text: "Generation VI+",
        },
      ],
    }
  },
  methods: {
    switchGeneration(selected) {
      this.selected = selected
      this.$emit("selectionChanged", selected)
      console.log("Selection Changed to: " + selected)
    },
    // Cookies may be implemented in Phase 2
    // writeCookie() {},
    // readCookie() {},
  },
}
</script>

<style scoped>
* {
  /* display: none;
  visibility: hidden; */
}

.displayed {
  display: unset;
  visibility: visible;
}

.selection-modal-inactive {
  position: absolute;
  top: 1vh;
  left: 99vw;
  width: 0;
  height: 0;
  /* display: none; */
  opacity: 0.5;
  /* visibility: hidden; */
  font-size: 0;
  z-index: -1;
  transition-duration: 0.3s;
}
.selection-modal-active {
  position: absolute;
  top: 20vh;
  left: 20vw;
  width: 60vw;
  height: 60vh;
  opacity: 1;
  /* visibility: visible; */
  font-size: 0.9rem;
  z-index: 3;
  background-color: #222222;
  transition-duration: 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

button {
  border-radius: 2px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
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

.generation-selection-explanation {
  width: 90%;
  /* font-size: 0.9rem; */
}

.generation-selection-fieldset {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
}
.generation-selection-legend {
  width: 100%;
  margin-bottom: 4vh;
  text-align: center;
}
.selection-button {
  width: 15vw;
  height: 7vh;
  /* font-size: 0.9rem; */
}
.selection-button-active {
  width: 14.9vw;
  height: 6.9vh;
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
    top: 25vh;
    left: 10vw;
    width: 80vw;
    height: 50vh;
  }
}
</style>
