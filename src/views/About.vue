<template>
  <div class="about">
    <!-- <NavBar :modalIsActive="currentlyActiveGridItem > -1" @selectionChanged="switchGeneration" /> -->
    <h1>This is the about page.</h1>
  </div>
</template>

<script>
// import NavBar from "@/components/NavBar.vue"

export default {
  name: "About",
  components: {
    // NavBar,
  },
  props: {},
  data: function () {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
/**
*   LANDSCAPE ORIENTATION AND DEFAULT STYLES
*/
.about {
  height: 100vh;
  background-color: #222222;
}
</style>
