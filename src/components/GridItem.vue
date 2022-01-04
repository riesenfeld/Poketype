<template>
  <div class="grid-item" :style="[isActive ? active : passive]" @click="toggleModal">
    <h1>THIS IS A GRID ITEM: {{ type.name }}</h1>
    <h2>{{ isActive }}</h2>
  </div>
</template>

<script>
export default {
  /***
   *
   *    The outer component needs to keep track of the modal because
   *    only one grid item may be active at a time!
   *    Either:
   *    1. Emit an event from here, or
   *    2. Send props down from Home (this is cleaner, i think)
   *
   */
  name: "GridItem",
  props: {
    type: Object,
  },
  data: function () {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleModal() {
      if (this.isActive) {
        this.isActive = false
      } else this.isActive = true

      return this.isActive
    },
  },
  computed: {
    passive() {
      return {
        backgroundColor: "red",
      }
    },
    active() {
      return {
        backgroundColor: "green",
      }
    },
  },
}
</script>

<style scoped>
.grid-item {
  background-color: blue;
  border: 2px solid blue;
}
/* .active {
} */
</style>
