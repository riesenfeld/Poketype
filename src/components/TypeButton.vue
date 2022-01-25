<template>
  <button
    class="type-button"
    :style="[buttonSize, statusStyle]"
    :aria-disabled="status != 'free'"
    @click="handleClickEvent"
  >
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
    /**
     *  Whether a button is:
     *  (a) "free" -- free to be selected,
     *  (b) "selected" -- disabled by being selected, or
     *  (c) "unselectable" disabled by selectedTypes being full */
    status: {
      type: String,
      default: "free",
    },
  },
  data() {
    return {}
  },
  methods: {
    handleClickEvent() {
      console.log(`status: ${this.status}`)
      this.$emit("buttonClicked", this.typeName)
    },
  },
  computed: {
    /**
     *  Dynamically-bound classes and styles
     **/
    //  colorMap() {
    //    return {
    //      padding: "1px",
    //      borderRadius: "2px",
    //    }
    //  },
    buttonSize() {
      if (this.status == "selected") {
        return {
          //  width: `calc(${this.dimensions.width} - 10px)`,
          //  height: `calc(${this.dimensions.height} - 10px)`,
          width: this.dimensions.width,
          height: this.dimensions.height,
          margin: "1px 0px -1px 1px",
        }
      } else
        return {
          width: this.dimensions.width,
          height: this.dimensions.height,
        }
    },
    statusStyle() {
      //Replace colorMap()
      if (this.status == "selected") {
        return {
          backgroundColor: this.typeColors[2],
          color: this.typeColors[1],
          filter: "contrast(140%)",
          //  filter: "brightness(100%) saturate(130%) contrast(140%)",
          //  border: "1px solid #AAA",
        }
      } else if (this.status == "unselectable") {
        return {
          backgroundColor: this.typeColors[2],
          color: this.typeColors[1],
          filter: "brightness(65%) saturate(130%) contrast(140%)",
          opacity: 0.6,
        }
      } else
        return {
          "--hover-filter": "brightness(65%) saturate(130%) contrast(140%)",
          "--filter": "brightness(80%) saturate(130%) contrast(140%)",
          //  "--color": this.typeColors[1],
          backgroundColor: this.typeColors[2],
          color: this.typeColors[1],
          //  backgroundColor: "black",
          //  color: "white",
          //  opacity: 0.5,
          //  filter: "brightness(80%) saturate(130%) contrast(140%)",
          boxShadow: "2px 2px 2px black",
          //  filter: "brightness(1.1)",
          //  filter: "saturate(180%)",
        }
    },
    /**
     *   Getters
     */
    isFree() {
      return this.status == "free"
    },
  },
}
</script>

<style scoped>
.type-button {
  font-size: 1rem;
  padding: 1px;
  border-radius: 2px;
  /* Defined in statusStyle() */
  filter: var(--filter);
}
.type-button:hover {
  /* Defined in statusStyle() */
  filter: var(--hover-filter);
}
</style>
