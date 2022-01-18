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
    <!-- <span class="nav-item nav-select-wrapper">
      <select
        v-if="this.$route.name == 'Home'"
        v-model="selected"
        id="generation-select"
        name="generation-select"
      >
        <option value="gen6">Generation VI+</option>
        <option value="gen2">Generation II - V</option>
        <option value="gen1">Generation I</option>
      </select>
    </span> -->
    <span class="nav-item nav-switch-wrapper">
      <div
        :class="[selectionModalIsActive ? 'selection-modal-active' : 'selection-modal-inactive']"
      ></div>
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
      // selectionModalIsActive: false,
    }
  },
  methods: {
    openModal() {
      this.$emit("selectionModalActivated")
      // this.selectionModalIsActive = true
      //emit an event to App like this.$emit("modalOn") in GridItem
      // and this.$emit("activeGridItemChanged", id) in Home.
      // Can you get away with emiting an event like this with id of 1000?
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
  color: #cccccc;
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
/* .nav-select-wrapper {
  width: 25%;
  justify-content: flex-end;
} */
.logo {
  height: 50%;
  max-width: 35vw;
  filter: brightness(0);
}

/* #generation-select { */
/* Slightly larger than the default width of a <select> element
      containing the text "Generation II - V" */
/* width: 7.8rem;
  margin-bottom: 0.5vh; */
/* } */
.behind-backdrop {
  filter: blur(1.5px);
}

.selection-modal-inactive {
  width: 0;
  height: 0;
  display: none;
  opacity: 0;
  z-index: -1;
}
.selection-modal-active {
  position: absolute;
  top: 25vh;
  left: 25vw;
  width: 50vw;
  height: 50vh;
  display: block;
  opacity: 1;
  z-index: 3;
  background-color: burlywood;
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
  /* #generation-select {
    width: 7.5rem;
    font-size: 0.8rem;
    position: relative;
    right: 4vw;
  } */
  /* .nav-link-wrapper {
    width: 40%;
  }
  .nav-select-wrapper {
    width: 40%;
  }
  .nav-logo-wrapper {
    width: 20%;
  } */
}
</style>
