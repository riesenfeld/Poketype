<template>
  <div class="dual-types">
    <h3>This is a test</h3>
    <div class="selected-types" aria-live="polite">
      <TypeButton
        v-for="type in selectedTypes"
        :key="type.id"
        @buttonClicked="deselectType(type)"
        class="type"
        :typeName="type.name"
        :typeColors="colors[type.name]"
      />
    </div>
    <div class="type-list">
      <TypeButton
        v-for="type in pokemonTypes"
        :key="type.id"
        :class="{ 'is-selected': isSelected(type) }"
        :aria-disabled="isSelected(type)"
        @buttonClicked="selectType(type)"
        :typeName="type.name"
        :typeColors="colors[type.name]"
      />
    </div>
  </div>
</template>

<script>
import TypeButton from "@/components/TypeButton.vue"
import colors from "../data/SwordAndShieldColors.js"
export default {
  name: "DualTypes",
  components: {
    TypeButton,
  },
  props: {
    /* Passed in by router */
    typesByGeneration: Object,
    selectedGeneration: {
      type: String,
      default: "gen6",
    },
  },
  data() {
    return {
      /* Can be one of three objects containing type data for the selected generation */
      pokemonTypes: this.typesByGeneration[this.selectedGeneration],
      colors,
      selectedTypes: [],
    }
  },
  methods: {
    isSelected(type) {
      return this.selectedTypes.indexOf(type) > -1
    },
    selectType(type) {
      if (this.selectedTypes.length < 2 && !this.isSelected(type)) {
        this.selectedTypes.push(type)
      }
    },
    deselectType(type) {
      if (this.selectedTypes.length > 0) {
        this.selectedTypes = this.selectedTypes.filter(function (t) {
          return t != type
        })
      }
    },
  },
}
</script>

<style scoped>
.dual-types {
  height: 90vh; /* viewport height - navbar height */
  background-color: #222222;
}

.type-list {
  /* width: 60%; */
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
}

.selected-types {
}

button {
  /* padding: 2px; */
  /* width: 2vw;
  height: 5vh; */
  font-size: 1rem;
}

.is-selected {
  opacity: 0.5;
}

@media (orientation: portrait) {
  .home {
    height: 92vh; /* viewport height - navbar height */
  }
}
</style>
