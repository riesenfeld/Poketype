<template>
  <div class="home">
    <div id="modal-backdrop" :class="{ active: modalActivated }"></div>
    <NavBar />
    <div id="vertical-centering-flexbox">
      <div id="horizontal-centering-flexbox">
        <main id="container">
          <GridItem
            class="type"
            :type="pokemonTypes[0]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[1]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[2]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[3]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[4]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[5]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[6]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[7]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[8]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[9]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[10]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[11]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[12]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[13]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[14]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[15]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[16]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
          <GridItem
            class="type"
            :type="pokemonTypes[17]"
            :orientation="orientation"
            @modalToggled="toggleModalBackground"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"
import GridItem from "./GridItem.vue"
export default {
  name: "Home",
  components: {
    NavBar,
    GridItem,
  },
  props: {
    //  msg: String
  },
  data: function () {
    return {
      pokemonTypes: [
        {
          id: 0,
          name: "Normal",
          defendingNotVeryEffective: [],
          defendingSuperEffective: ["Fighting"],
          defendingNotEffective: ["Ghost"],
          attackingNotVeryEffective: ["Rock", "Steel"],
          attackingSuperEffective: [],
          attackingNotEffective: ["Ghost"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 1,
          name: "Fire",
          defendingNotVeryEffective: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
          defendingSuperEffective: ["Water", "Ground", "Rock"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Fire", "Water", "Rock", "Dragon"],
          attackingSuperEffective: ["Grass", "Ice", "Bug", "Steel"],
          attackingNotEffective: [],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 2,
          name: "Water",
          defendingNotVeryEffective: ["Fire", "Water", "Ice", "Steel"],
          defendingSuperEffective: ["Electric", "Grass"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Water", "Grass", "Dragon"],
          attackingSuperEffective: ["Fire", "Ground", "Rock"],
          attackingNotEffective: [],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 3,
          name: "Grass",
          defendingNotVeryEffective: ["Water", "Electric", "Grass", "Ground"],
          defendingSuperEffective: ["Fire", "Ice", "Poison", "Flying", "Bug"],
          defendingNotEffective: [],
          attackingNotVeryEffective: [
            "Fire",
            "Grass",
            "Poison",
            "Flying",
            "Bug",
            "Dragon",
            "Steel",
          ],
          attackingSuperEffective: ["Water", "Ground", "Rock"],
          attackingNotEffective: [],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 4,
          name: "Electric",
          defendingNotVeryEffective: ["Electric", "Flying", "Steel"],
          defendingSuperEffective: ["Ground"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Electric", "Grass", "Dragon"],
          attackingSuperEffective: ["Water", "Flying"],
          attackingNotEffective: ["Ground"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 5,
          name: "Ice",
          defendingNotVeryEffective: ["Ice"],
          defendingSuperEffective: ["Fire", "Fighting", "Rock", "Steel"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Fire", "Water", "Ice", "Steel"],
          attackingSuperEffective: ["Grass", "Ground", "Flying", "Dragon"],
          attackingNotEffective: [],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 6,
          name: "Fighting",
          defendingNotVeryEffective: ["Bug", "Rock", "Dark"],
          defendingSuperEffective: ["Flying", "Psychic", "Fairy"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
          attackingSuperEffective: ["Normal", "Ice", "Rock", "Dark", "Steel"],
          attackingNotEffective: ["Ghost"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 7,
          name: "Poison",
          defendingNotVeryEffective: ["Grass", "Fighting", "Poison", "Bug", "Fairy"],
          defendingSuperEffective: ["Ground", "Psychic"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Poison", "Ground", "Rock", "Ghost"],
          attackingSuperEffective: ["Grass", "Fairy"],
          attackingNotEffective: ["Steel"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 8,
          name: "Ground",
          defendingNotVeryEffective: ["Poison", "Rock"],
          defendingSuperEffective: ["Water", "Grass", "Ice"],
          defendingNotEffective: ["Electric"],
          attackingNotVeryEffective: ["Grass", "Bug"],
          attackingSuperEffective: ["Fire", "Electric", "Poison", "Rock", "Steel"],
          attackingNotEffective: ["Flying"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 9,
          name: "Flying",
          defendingNotVeryEffective: ["Grass", "Fighting", "Bug"],
          defendingSuperEffective: ["Electric", "Ice", "Rock"],
          defendingNotEffective: ["Ground"],
          attackingNotVeryEffective: ["Electric", "Rock", "Steel"],
          attackingSuperEffective: ["Grass", "Fighting", "Bug"],
          attackingNotEffective: [],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 10,
          name: "Psychic",
          defendingNotVeryEffective: ["Fighting", "Psychic"],
          defendingSuperEffective: ["Bug", "Ghost", "Dark"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Psychic", "Steel"],
          attackingSuperEffective: ["Fighting", "Poison"],
          attackingNotEffective: ["Dark"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 11,
          name: "Bug",
          defendingNotVeryEffective: ["Grass", "Fighting", "Ground"],
          defendingSuperEffective: ["Fire", "Flying", "Rock"],
          defendingNotEffective: [],
          attackingNotVeryEffective: [
            "Fire",
            "Fighting",
            "Poison",
            "Flying",
            "Ghost",
            "Steel",
            "Fairy",
          ],
          attackingSuperEffective: ["Grass", "Psychic", "Dark"],
          attackingNotEffective: [],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 12,
          name: "Rock",
          defendingNotVeryEffective: ["Normal", "Fire", "Poison", "Flying"],
          defendingSuperEffective: ["Water", "Grass", "Fighting", "Ground", "Steel"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Fighting", "Ground", "Steel"],
          attackingSuperEffective: ["Fire", "Ice", "Flying", "Bug"],
          attackingNotEffective: [],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 13,
          name: "Ghost",
          defendingNotVeryEffective: ["Poison", "Bug"],
          defendingSuperEffective: ["Ghost", "Dark"],
          defendingNotEffective: ["Normal", "Fighting"],
          attackingNotVeryEffective: ["Dark"],
          attackingSuperEffective: ["Psychic", "Ghost"],
          attackingNotEffective: ["Normal"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 14,
          name: "Dragon",
          defendingNotVeryEffective: ["Fire", "Water", "Electric", "Grass"],
          defendingSuperEffective: ["Ice", "Dragon", "Fairy"],
          defendingNotEffective: [],
          attackingNotVeryEffective: ["Steel"],
          attackingSuperEffective: ["Dragon"],
          attackingNotEffective: ["Fairy"],
          generationIntroduced: 1,
          specialInteraction: "",
        },
        {
          id: 15,
          name: "Dark",
          defendingNotVeryEffective: ["Ghost", "Dark"],
          defendingSuperEffective: ["Fighting", "Bug", "Fairy"],
          defendingNotEffective: ["Psychic"],
          attackingNotVeryEffective: ["Fighting", "Dark", "Fairy"],
          attackingSuperEffective: ["Psychic", "Ghost"],
          attackingNotEffective: [],
          generationIntroduced: 2,
          specialInteraction: "",
        },
        {
          id: 16,
          name: "Steel",
          defendingNotVeryEffective: [
            "Normal",
            "Grass",
            "Ice",
            "Flying",
            "Psychic",
            "Bug",
            "Rock",
            "Dragon",
            "Steel",
            "Fairy",
          ],
          defendingSuperEffective: ["Fire", "Fighting", "Ground"],
          defendingNotEffective: ["Poison"],
          attackingNotVeryEffective: ["Fire", "Water", "Electric", "Steel"],
          attackingSuperEffective: ["Ice", "Rock", "Fairy"],
          attackingNotEffective: [],
          generationIntroduced: 2,
          specialInteraction: "",
        },
        {
          id: 17,
          name: "Fairy",
          defendingNotVeryEffective: ["Fighting", "Bug", "Dark"],
          defendingSuperEffective: ["Poison", "Steel"],
          defendingNotEffective: ["Dragon"],
          attackingNotVeryEffective: ["Fire", "Poison", "Steel"],
          attackingSuperEffective: ["Fighting", "Dragon", "Dark"],
          attackingNotEffective: [],
          generationIntroduced: 6,
          specialInteraction: "",
        },
      ],
      modalActivated: false,
      orientation: null,
    }
  },
  methods: {
    updateOrientation(bool) {
      if (bool) {
        this.orientation = "portrait"
      } else {
        this.orientation = "landscape"
      }
    },
    toggleModalBackground() {
      if (this.modalActivated) {
        this.modalActivated = false
      } else this.modalActivated = true
      return this.modalActivated
    },
  },
  mounted() {
    /* Get and update the window's orientation */
    var mediaQueryList = window.matchMedia("(orientation: portrait)")
    this.updateOrientation(mediaQueryList.matches)
    /* Bring the event handler into scope for addEventListener */
    let updateOrientation = this.updateOrientation
    /* Listen for changes to orientation */
    mediaQueryList.addEventListener("change", function (mql) {
      updateOrientation(mql.matches)
    })
  },
}
</script>

<style scoped>
/**
*   LANDSCAPE ORIENTATION AND DEFAULT STYLES
*/
.home {
  height: 100vh;
}
#modal-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  visibility: hidden;
  transition-duration: 0.5s;
}
#modal-backdrop.active {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0.5, 0.5, 0.5, 0.8);
  z-index: 2;
  visibility: visible;
}
#vertical-centering-flexbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%; /* viewport height - navbar height */
}
#horizontal-centering-flexbox {
  display: flex;
  justify-content: center;
  width: 100%;
}
#container {
  /* Making sure height is always half with width without flowing over the page */
  /* [width, height] = [84vw, 42vw]. [max-width, max-height] = [168vh, 84vh].  */
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

@media (orientation: portrait) {
  #vertical-centering-flexbox {
    height: 92%; /* viewport height - navbar height */
  }
  #container {
    /* Making sure height is always twice with width without flowing over the page */
    /* [width, height] = [42vh, 84vh]. [max-width, max-height] = [84vw, 168vw].  */
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
