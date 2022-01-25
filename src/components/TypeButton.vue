<template>
  <button class="type-button" :style="colorMap" @click="handleClickEvent">{{ typeName }}</button>
</template>

<script>
export default {
  name: "TypeButton",
  props: {
    typeName: String,
    typeColors: Array,
  },
  data() {
    return {}
  },
  methods: {
    handleClickEvent() {
      this.$emit("buttonClicked", this.typeName)
    },
  },
  computed: {
    colorMap() {
      return {
        backgroundColor: this.typeColors[2],
        color: this.typeColors[1],
        filter: "contrast(130%)",
        padding: "1px",
        borderRadius: "2px",
      }
    },
  },
}
</script>

<style scoped></style>
