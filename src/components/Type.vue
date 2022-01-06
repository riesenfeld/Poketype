<template>
  <span>
    <span class="typeName" :style="colorMap">{{ typeName }}</span>
    <span class="delimiter">{{ delimiters[Math.min(delimiter, 2)] }}</span>
  </span>
</template>

<script>
export default {
  name: "Type",
  props: {
    typeName: String,
    typeColors: Array,
    /**
     * An optional delimiter for natural language lists of types.
     * Can be ",", "and", or "".
     * In situations where a delimiter is needed (lists of Type components),
     *   the parent passes in list.length - 1 - index as a prop.
     *   If the integer is 0 (or not passed in), the delimiter is "" (end of list/not a list)
     *   If the integer is 1, the delimiter is ", and " (penultimate element of list)
     *   If the integer is 2 or greater, the delimiter is ", " (all other elements)
     * */
    delimiter: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      delimiters: ["", ", and ", ", "],
    }
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
