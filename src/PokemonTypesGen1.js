var pokemonTypesGen1 = [
  {
    id: 0,
    name: "Normal",
    defendingNotVeryEffective: [],
    defendingSuperEffective: ["Fighting"],
    defendingNotEffective: ["Ghost"],
    attackingNotVeryEffective: ["Rock"],
    attackingSuperEffective: [],
    attackingNotEffective: ["Ghost"],
    existsInThisGen: true,
    specialInteraction: {
      defendingNotEffective: {
        Ghost: " (Except for the move Night Shade)",
      },
    },
  },
  {
    id: 1,
    name: "Fire",
    defendingNotVeryEffective: ["Fire", "Grass", "Bug"],
    defendingSuperEffective: ["Water", "Ground", "Rock"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Fire", "Water", "Rock", "Dragon"],
    attackingSuperEffective: ["Grass", "Ice", "Bug"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 2,
    name: "Water",
    defendingNotVeryEffective: ["Fire", "Water", "Ice"],
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
    attackingNotVeryEffective: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon"],
    attackingSuperEffective: ["Water", "Ground", "Rock"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 4,
    name: "Electric",
    defendingNotVeryEffective: ["Electric", "Flying"],
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
    defendingSuperEffective: ["Fire", "Fighting", "Rock"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Water", "Ice"],
    attackingSuperEffective: ["Grass", "Ground", "Flying", "Dragon"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 6,
    name: "Fighting",
    defendingNotVeryEffective: ["Bug", "Rock"],
    defendingSuperEffective: ["Flying", "Psychic"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Poison", "Flying", "Psychic", "Bug"],
    attackingSuperEffective: ["Normal", "Ice", "Rock"],
    attackingNotEffective: ["Ghost"],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 7,
    name: "Poison",
    defendingNotVeryEffective: ["Grass", "Fighting", "Poison"],
    defendingSuperEffective: ["Ground", "Psychic", "Bug"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Poison", "Ground", "Rock", "Ghost"],
    attackingSuperEffective: ["Grass", "Bug"],
    attackingNotEffective: [],
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
    attackingSuperEffective: ["Fire", "Electric", "Poison", "Rock"],
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
    attackingNotVeryEffective: ["Electric", "Rock"],
    attackingSuperEffective: ["Grass", "Fighting", "Bug"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 10,
    name: "Psychic",
    defendingNotVeryEffective: ["Fighting", "Psychic"],
    defendingSuperEffective: ["Bug"],
    defendingNotEffective: ["Ghost"],
    attackingNotVeryEffective: ["Psychic"],
    attackingSuperEffective: ["Fighting", "Poison"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {
      defendingNotEffective: {
        Ghost: " (Except for the move Night Shade)",
      },
    },
  },
  {
    id: 11,
    name: "Bug",
    defendingNotVeryEffective: ["Grass", "Fighting", "Ground"],
    defendingSuperEffective: ["Fire", "Flying", "Rock", "Poison"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Fire", "Fighting", "Flying", "Ghost"],
    attackingSuperEffective: ["Grass", "Psychic", "Poison"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 12,
    name: "Rock",
    defendingNotVeryEffective: ["Normal", "Fire", "Poison", "Flying"],
    defendingSuperEffective: ["Water", "Grass", "Fighting", "Ground"],
    defendingNotEffective: [],
    attackingNotVeryEffective: ["Fighting", "Ground"],
    attackingSuperEffective: ["Fire", "Ice", "Flying", "Bug"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 13,
    name: "Ghost",
    defendingNotVeryEffective: ["Poison", "Bug"],
    defendingSuperEffective: ["Ghost"],
    defendingNotEffective: ["Normal", "Fighting"],
    attackingNotVeryEffective: [],
    attackingSuperEffective: ["Ghost"],
    attackingNotEffective: ["Normal", "Psychic"],
    existsInThisGen: true,
    specialInteraction: {
      attackingNotEffective: {
        All: " (Except for the move Night Shade)",
      },
    },
  },
  {
    id: 14,
    name: "Dragon",
    defendingNotVeryEffective: ["Fire", "Water", "Electric", "Grass"],
    defendingSuperEffective: ["Ice", "Dragon"],
    defendingNotEffective: [],
    attackingNotVeryEffective: [],
    attackingSuperEffective: ["Dragon"],
    attackingNotEffective: [],
    existsInThisGen: true,
    specialInteraction: {},
  },
  {
    id: 15,
    name: "Dark",
    defendingNotVeryEffective: [],
    defendingSuperEffective: [],
    defendingNotEffective: [],
    attackingNotVeryEffective: [],
    attackingSuperEffective: [],
    attackingNotEffective: [],
    existsInThisGen: false,
    specialInteraction: {},
  },
  {
    id: 16,
    name: "Steel",
    defendingNotVeryEffective: [],
    defendingSuperEffective: [],
    defendingNotEffective: [],
    attackingNotVeryEffective: [],
    attackingSuperEffective: [],
    attackingNotEffective: [],
    existsInThisGen: false,
    specialInteraction: {},
  },
  {
    id: 17,
    name: "Fairy",
    defendingNotVeryEffective: [],
    defendingSuperEffective: [],
    defendingNotEffective: [],
    attackingNotVeryEffective: [],
    attackingSuperEffective: [],
    attackingNotEffective: [],
    existsInThisGen: false,
    specialInteraction: {},
  },
]

export default pokemonTypesGen1
