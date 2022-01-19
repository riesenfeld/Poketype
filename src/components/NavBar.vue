<template>
  <nav :class="{ 'nav-bar': true, 'behind-backdrop': modalIsActive }">
    <span v-if="this.$route.name == 'Home'" class="nav-item nav-link-wrapper">
      <router-link to="/about" id="nav-link-about" class="nav-link">About</router-link>
    </span>
    <span v-if="this.$route.name == 'About'" class="nav-item nav-link-wrapper">
      <router-link to="/" id="nav-link-home" class="nav-link">Home</router-link>
    </span>
    <span class="nav-item nav-logo-wrapper">
      <img src="@/assets/logo.svg" class="logo" />
    </span>
    <span class="nav-item nav-switch-wrapper">
      <div
        :class="[selectionModalIsActive ? 'selection-modal-active' : 'selection-modal-inactive']"
      >
        <div class="generation-selection-explanation">
          <p>
            In the mainline Pokémon games, there have been two alterations to Pokémon types, both of
            which involved the addition of previously-absent types and interactions.
          </p>
          <br />
          <p>
            Most notably, Generation II (Gold and Silver) saw the addition of the Dark and Steel
            types, while Generation VI (X and Y) saw the introduction of the Fairy type. A few
            other, minor changes to type interactions were added with these generations as well.
          </p>
          <br />
          <p>
            Thus, you have three type interaction categories to choose from: Generation I,
            Generations II through V, and Generation VI and onward.
          </p>
        </div>
        <fieldset class="generation-selection-fieldset">
          <legend class="generation-selection-legend">Select a game generation</legend>
          <button :class="['selection-button', { 'selection-button-active': selected == 'gen6' }]">
            <input
              type="radio"
              id="gen6"
              class="hidden-radio-button"
              name="radio-button"
              value="gen6"
              checked
              v-model="selected"
            />
            <label for="gen6">Generation VI+</label>
          </button>
          <button :class="['selection-button', { 'selection-button-active': selected == 'gen2' }]">
            <input
              type="radio"
              id="gen2"
              class="hidden-radio-button"
              name="radio-button"
              value="gen2"
              v-model="selected"
            />
            <label for="gen2">Generation II - V</label>
          </button>
          <button :class="['selection-button', { 'selection-button-active': selected == 'gen1' }]">
            <input
              type="radio"
              id="gen1"
              class="hidden-radio-button"
              name="radio-button"
              value="gen1"
              v-model="selected"
            />
            <label for="gen1">Generation I</label>
          </button>
        </fieldset>
      </div>
      <button class="switch-generation-button" @click="openModal">Switch generation</button>
    </span>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    modalIsActive: {
      type: Boolean,
      default: false,
    },
    selectionModalIsActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: "gen6",
    }
  },
  methods: {
    openModal() {
      this.$emit("selectionModalActivated")
    },
  },
  watch: {
    selected(val) {
      this.$emit("selectionChanged", val)
    },
  },
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: #333333;
  color: #bbbbb5;
}

.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
}
.nav-link-wrapper {
  width: 25%;
}
.nav-logo-wrapper {
  width: 50%;
}
.nav-switch-wrapper {
  width: 25%;
}
.logo {
  height: 50%;
  max-width: 35vw;
  filter: brightness(0);
}

.behind-backdrop {
  filter: blur(1.5px);
}

.selection-modal-inactive {
  position: absolute;
  top: 1vh;
  left: 99vw;
  width: 0;
  height: 0;
  /* display: none; */
  opacity: 0.5;
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
  z-index: 3;
  background-color: #222222;
  transition-duration: 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
  font-size: 0.9rem;
}

.generation-selection-fieldset {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
}
.selection-button {
  width: 15vw;
  height: 7vh;
  font-size: 0.9rem;
}
.selection-button-active {
  background-color: #44aa44;
  width: 14.9vw;
  height: 6.9vh;
}

.hidden-radio-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

@media (orientation: portrait) {
  .nav-bar {
    width: 100%;
    height: 8vh;
  }
  .selection-modal-active {
    top: 25vh;
    left: 10vw;
    width: 80vw;
    height: 50vh;
  }
}
</style>
