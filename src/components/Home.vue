<template>
  <div class="home">
    <NavBar />
    <h1>THIS IS A TEST</h1>
    <main id="container">
      <GridItem :type="pokemonTypes[0]" />
      <GridItem :type="pokemonTypes[1]" />
      <GridItem :type="pokemonTypes[2]" />
      <GridItem :type="pokemonTypes[3]" />
      <GridItem :type="pokemonTypes[4]" />
      <GridItem :type="pokemonTypes[5]" />
      <GridItem :type="pokemonTypes[6]" />
      <GridItem :type="pokemonTypes[7]" />
      <GridItem :type="pokemonTypes[8]" />
      <GridItem :type="pokemonTypes[9]" />
      <GridItem :type="pokemonTypes[10]" />
      <GridItem :type="pokemonTypes[11]" />
      <GridItem :type="pokemonTypes[12]" />
      <GridItem :type="pokemonTypes[13]" />
      <GridItem :type="pokemonTypes[14]" />
      <GridItem :type="pokemonTypes[15]" />
      <GridItem :type="pokemonTypes[16]" />
      <GridItem :type="pokemonTypes[17]" />
    </main>
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
    }
  },
}
</script>

<style scoped>
#container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
