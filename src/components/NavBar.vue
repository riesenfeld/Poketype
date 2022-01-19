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
      <GenerationSelectModal
        :selectionModalIsActive="selectionModalIsActive"
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
      // selected: "gen6",
    }
  },
  methods: {
    openModal() {
      this.$emit("selectionModalActivated")
    },
    // handleSelectionModalActivation() {
    //   this.$emit("selectionModalActivated")
    // },
    handleSelectionChange(selected) {
      this.$emit("selectionChanged", selected)
    },
    // openModal() {
    //   this.$emit("selectionModalActivated")
    // },
    // switchGeneration(selected) {
    //   this.selected = selected
    //   this.$emit("selectionChanged", selected)
    //   console.log("Selection Changed to: " + selected)
    // },
    // Cookies may be implemented in Phase 2
    // writeCookie() {},
    // readCookie() {},
  },
  // watch: {
  //   selected(val) {
  //     this.$emit("selectionChanged", val)
  //     console.log("Selection Changed to: " + val)
  //   },
  // },
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
.switch-generation-button:focus {
  box-shadow: none;
}
.behind-backdrop {
  filter: blur(1.5px);
}

@media (orientation: portrait) {
  .nav-bar {
    width: 100%;
    height: 8vh;
  }
}
</style>
