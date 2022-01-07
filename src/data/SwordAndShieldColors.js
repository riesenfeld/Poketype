//SYMBOL 	TYPE NAME 	ATTACK

/**
 * The type color data from Pokemon Sword and Shield.
 * This data was extracted from Sword/Shield game files
 * and posted on pokemonaaah.net by user and founder of the site nick15.
 * The post: http://www.pokemonaaah.net/news/2019/12/sword-shield-type-symbols-and-color-guide/
 *
 * Each type color has three variations:
 *   1. A “medium” color for the type symbol
 *   2. A “dark” color for the type’s name
 *   3. A “light” color for attacks of that type
 * These are given in this order in the colors object in this order.
 */

var colors = {
  Normal: ["#909ca2", "#4c504f", "#acb4b7"],
  Fire: ["#ff9d54", "#605043", "#ffb68d"],
  Water: ["#4e92d2", "#424e5a", "#8cade0"],
  Grass: ["#63bc5a", "#445547", "#94cc8f"],
  Electric: ["#f4d43b", "#5d5a42", "#f6dc85"],
  Ice: ["#73d0bd", "#465858", "#9cdacd"],
  Fighting: ["#ce4267", "#594149", "#d98698"],
  Poison: ["#a96ac9", "#524858", "#be98d5"],
  Ground: ["#d97846", "#5b4940", "#e19f87"],
  Flying: ["#90a9dc", "#4d515a", "#aebde4"],
  Psychic: ["#fb717b", "#5e484a", "#fa9c9d"],
  Bug: ["#91c12c", "#4d553e", "#add080"],
  Rock: ["#c6b88a", "#58554e", "#d3c8a8"],
  Ghost: ["#526aad", "#424953", "#8e97be"],
  Dragon: ["#0c6cc4", "#374957", "#7a99cf"],
  Dark: ["#5a5467", "#44454a", "#908d96"],
  Steel: ["#5a8fa3", "#444d52", "#90acb8"],
  Fairy: ["#ed91e3", "#5c4e5d", "#f2adec"],
}

export default colors
