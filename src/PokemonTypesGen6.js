var pokemonTypesGen6 = [
  {
    id: 0,
    name: "Normal",
    defendingNotVeryEffective: [],
    defendingSuperEffective: ["Fighting"],
    defendingNotEffective: ["Ghost"],
    attackingNotVeryEffective: ["Rock", "Steel"],
    attackingSuperEffective: [],
    attackingNotEffective: ["Ghost"],
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 3,
    name: "Grass",
    defendingNotVeryEffective: ["Water", "Electric", "Grass", "Ground"],
    defendingSuperEffective: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
    attackingSuperEffective: ["Water", "Ground", "Rock"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 11,
    name: "Bug",
    defendingNotVeryEffective: ["Grass", "Fighting", "Ground"],
    defendingSuperEffective: ["Fire", "Flying", "Rock"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
    attackingSuperEffective: ["Grass", "Psychic", "Dark"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
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
    existsInThisGen: true,
    specialInteraction: {},
  },
]

export default pokemonTypesGen6