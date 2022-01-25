<template>
  <nav :class="{ 'nav-bar': true, 'behind-backdrop': modalIsActive }">
    <span v-if="this.$route.name == 'Home'" class="nav-item nav-link-wrapper">
      <router-link v-if="!singlePage" to="/about" id="nav-link-about" class="nav-link"
        >About</router-link
      >
      <router-link v-if="!singlePage" to="/dual-types" id="nav-link-dual-types" class="nav-link"
        >Dual Types</router-link
      >
    </span>
    <span v-if="this.$route.name == 'About'" class="nav-item nav-link-wrapper">
      <router-link to="/" id="nav-link-home" class="nav-link">Home</router-link>
    </span>
    <span class="nav-item nav-logo-wrapper">
      <img src="@/assets/logo.svg" class="logo" />
    </span>
    <span class="nav-item nav-switch-wrapper">
      <GenerationSelectModal
        :selectionModalIsActive="selectionModalIsActive"
        :aspectRatio="aspectRatio"
        @selectionChanged="handleSelectionChange"
      />
      <button class="switch-generation-button" @click="openModal">Switch generation</button>
    </span>
  </nav>
</template>

<script>
import GenerationSelectModal from "./GenerationSelectModal.vue"
export default {
  components: { GenerationSelectModal },
  name: "NavBar",
  props: {
    /* Removes router-link to the about page when true */
    singlePage: Boolean,
    modalIsActive: {
      type: Boolean,
      default: false,
    },
    selectionModalIsActive: {
      type: Boolean,
      default: false,
    },
    aspectRatio: Number,
  },
  data() {
    return {}
  },
  methods: {
    openModal() {
      this.$emit("selectionModalActivated")
    },
    handleSelectionChange(selected) {
      this.$emit("selectionChanged", selected)
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
  border: none;
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
.switch-generation-button {
  width: 80%;
  max-width: 160px;
  height: 50%;
  border-radius: 2px;
  font-size: min(0.9rem, 2.5vh);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  background-color: #bbbbbb;
}
.switch-generation-button:focus {
  width: 78%;
  max-width: 156px;
  height: 48.5%;
  margin-bottom: -3px;
  box-shadow: none;
  font-size: 0.875rem;
  font-size: min(0.875rem, 1.94vh);
}
.behind-backdrop span {
  filter: blur(1.5px);
}

@media (min-aspect-ratio: 2/1) {
  .switch-generation-button {
    height: 60%;
    border-radius: 2px;
    font-size: min(0.9rem, 4vh);
  }
  .switch-generation-button:focus {
    height: 58.5%;
    font-size: min(0.9rem, 3.85vh);
  }
}

@media (min-aspect-ratio: 5/2) {
  .switch-generation-button {
    height: 70%;
    border-radius: 2px;
    font-size: min(0.9rem, 5vh);
  }
  .switch-generation-button:focus {
    height: 68.5%;
    font-size: min(0.9rem, 4.85vh);
  }
}

@media (orientation: portrait) {
  .nav-bar {
    width: 100%;
    height: 8vh;
  }
  .nav-switch-wrapper {
    align-items: flex-start;
  }
  .logo {
    filter: brightness(1);
  }
  .switch-generation-button {
    width: 95%;
    height: 40%;
    font-size: 2.7vw;
  }
  .switch-generation-button:focus {
    width: 92.6%;
    height: 39%;
    margin-bottom: -3px;
    box-shadow: none;
    font-size: 2.5vw;
  }
}
@media (orientation: portrait) and (min-aspect-ratio: 37/59) {
  .switch-generation-button {
    font-size: 1.8vw;
  }
  .switch-generation-button:focus {
    font-size: 1.75vw;
  }
}
</style>
