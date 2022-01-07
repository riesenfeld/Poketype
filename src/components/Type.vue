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
    typeColors: [Array, String],

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
      /* If the only one color is passed in (as a string), set the text color only */
      if (typeof this.typeColors == "string") {
        return {
          color: this.typeColors,
          padding: "1px",
          borderRadius: "2px",
        }
      }
      return {
        backgroundColor: this.typeColors[0],
        color: this.typeColors[3],
        padding: "1px",
        borderRadius: "2px",
      }
    },
  },
}
</script>

<style>
.testing-only {
  color: #a52626;
  background-color: initial;
}
</style>
