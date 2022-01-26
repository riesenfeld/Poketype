<template>
  <div class="dual-types">
    <h3 class="instructions">Select two types from the list on the right</h3>
    <div class="container">
      <div class="type-list">
        <TypeButton
          v-for="type in pokemonTypes"
          :key="type.id"
          class="type-list-item"
          @buttonClicked="isSelected(type) ? deselectByType(type) : selectType(type)"
          :typeName="type.name"
          :typeColors="colors[type.name]"
          :status="getButtonStatus(type)"
          :dimensions="typeListButtonDimensions"
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
              @buttonClicked="deselectByKey('typeOne')"
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
              @buttonClicked="deselectByKey('typeTwo')"
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
      baseButtonDimensions: {
        width: 90 / 10,
        height: 75 / 18 - 0.5,
      },
    }
  },
  methods: {
    isSelected(type) {
      return this.selectedTypes.typeOne == type || this.selectedTypes.typeTwo == type
    },
    selectType(type) {
      if (this.selectedTypes.typeOne == null && !this.isSelected(type)) {
        this.selectedTypes.typeOne = type
      } else if (this.selectedTypes.typeTwo == null && !this.isSelected(type)) {
        this.selectedTypes.typeTwo = type
      }
    },
    deselectByKey(key) {
      this.selectedTypes[key] = null
    },
    deselectByType(type) {
      if (this.selectedTypes.typeOne == type) {
        this.selectedTypes.typeOne = null
      } else if (this.selectedTypes.typeTwo == type) {
        this.selectedTypes.typeTwo = null
      }
    },
    /* Returns one of three status strings to be passed into TypeButton.
     * These status strings determine each TypeButtons styles and semantics (aria-disabled)
     */
    getButtonStatus(type) {
      if (this.isSelected(type)) {
        return "selected"
      } else if (this.selectedTypesIsFull) {
        return "unselectable"
      } else return "free"
    },
  },
  computed: {
    getSelectedTypes() {
      let arrayOfSelectedTypes = []
      if (this.selectedTypes.typeOne != null) {
        arrayOfSelectedTypes.push(this.selectedTypes.typeOne)
      }
      if (this.selectedTypes.typeTwo != null) {
        arrayOfSelectedTypes.push(this.selectedTypes.typeTwo)
      }
      return arrayOfSelectedTypes
    },
    selectedTypesIsFull() {
      return this.selectedTypes.typeOne != null && this.selectedTypes.typeTwo != null
    },
    typeListButtonDimensions() {
      return {
        width: `${this.baseButtonDimensions.width}vw`,
        height: `${this.baseButtonDimensions.height}vh`,
      }
    },
    selectedButtonDimensions() {
      // let w = document.getElementsByClassName("type-list")[0].width
      // console.log(`width: ${w}`)
      return {
        width: `${this.baseButtonDimensions.width * 3}vw`,
        height: `${this.baseButtonDimensions.height * 3}vh`,
      }
    },
  },
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
  /* background-color: maroon; */
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
  /* background-color: darkblue; */
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
  /* background-color: darkgoldenrod; */
}

.is-selected {
  opacity: 0.5;
}

.unselectable {
}

@media (orientation: portrait) {
  .home {
    height: 92vh; /* viewport height - navbar height */
  }
}

@media (max-height: 500px), (max-width: 500px) {
  .container {
    display: grid;
    grid-template-rows: 1fr 6fr;
    grid-template-columns: unset;

    width: 90vw;
    height: 75vh;
    margin-top: 5vh;
    margin-left: 5vw;
  }

  .type-list {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;
    order: 1;
    /* gap: 0; */
    /* height: 20vh; */
  }
  .information-container {
    display: grid;
    grid-template-rows: 1fr 5fr;
    /* height: 40vh; */
  }
}
</style>
