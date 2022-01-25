<template>
  <div class="dual-types">
    <h3 class="instructions">Select two types from the list on the right</h3>
    <div class="container">
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
      <div class="information-container">
        <div class="selected-types" aria-live="polite">
          <div class="type-present-or-empty type-one">
            <div
              v-if="selectedTypes.typeOne == null"
              class="empty-type-selection"
              :style="selectedButtonDimensions"
            ></div>
            <TypeButton
              v-else
              @buttonClicked="deselectType('typeOne')"
              class="selected-type"
              :typeName="selectedTypes.typeOne.name"
              :typeColors="colors[selectedTypes.typeOne.name]"
              :dimensions="selectedButtonDimensions"
            />
          </div>
          <div class="type-present-or-empty type-two">
            <div
              v-if="selectedTypes.typeTwo == null"
              class="empty-type-selection"
              :style="selectedButtonDimensions"
            ></div>
            <TypeButton
              v-else
              @buttonClicked="deselectType('typeTwo')"
              class="selected-type"
              :typeName="selectedTypes.typeTwo.name"
              :typeColors="colors[selectedTypes.typeTwo.name]"
              :dimensions="selectedButtonDimensions"
            />
          </div>
        </div>
        <div class="information"></div>
      </div>
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
      selectedTypes: {
        typeOne: null,
        typeTwo: null,
      },
      selectedButtonDimensions: {
        width: "40%",
        height: "50%",
      },
    }
  },
  methods: {
    isSelected(type) {
      return this.selectedTypes.typeOne == type || this.selectedTypes.typeTwo == type
    },
    selectType(type) {
      // if (this.selectedTypes.length < 2 && !this.isSelected(type)) {
      //   this.selectedTypes.push(type)
      // }
      if (this.selectedTypes.typeOne == null && !this.isSelected(type)) {
        this.selectedTypes.typeOne = type
      } else if (this.selectedTypes.typeTwo == null && !this.isSelected(type)) {
        this.selectedTypes.typeTwo = type
      }
    },
    deselectType(key) {
      // if (this.selectedTypes.length > 0) {
      //   this.selectedTypes = this.selectedTypes.filter(function (t) {
      //     return t != type
      //   })
      // }
      this.selectedTypes[key] = null
    },
  },
  //   computed() {
  //      buttonDi
  //   }
}
</script>

<style scoped>
.dual-types {
  height: 90vh; /* viewport height - navbar height */
  background-color: #222222;
  overflow: auto;
}

.container {
  display: grid;
  grid-template-columns: 1fr 9fr;
  width: 90vw;
  height: 75vh;
  margin-top: 5vh;
  margin-left: 5vw;
  background-color: maroon;
}

.type-list {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.information-container {
  display: grid;
  grid-template-rows: 1fr 5fr;
}

.selected-types {
  display: flex;
  justify-content: space-around;
  background-color: darkblue;
}

.type-present-or-empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
}

.empty-type-selection {
  width: 10vw;
  height: 5vw;
  border: 1px dotted white;
  border-radius: 2px;
}

.information {
  background-color: darkgoldenrod;
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
