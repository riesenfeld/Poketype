<template>
  <span class="type" :style="colorMap">{{ typeName }}</span>
</template>

<script>
export default {
  name: "Type",
  props: {
    typeName: String,
    typeColors: Array,
  },
  computed: {
    colorMap() {
      return {
        backgroundColor: this.typeColors[0],
      }
    },
  },
}
</script>

<style></style>
