<template>
  <button class="type-button" :style="[colorMap, buttonSize]" @click="handleClickEvent">
    {{ typeName }}
  </button>
</template>

<script>
export default {
  name: "TypeButton",
  props: {
    typeName: String,
    typeColors: Array,
    dimensions: {
      type: Object,
      default: () => {
        return {
          width: "auto",
          height: "auto",
        }
      },
    },
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
    buttonSize() {
      return {
        width: this.dimensions.width,
        height: this.dimensions.height,
      }
    },
  },
}
</script>

<style scoped>
.type-button {
  font-size: 1rem;
}
</style>
