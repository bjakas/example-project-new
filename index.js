const helloWorld = require("./src/helloWorld");

helloWorld.printHelloWorld();

const yellowPokemon = require("./src/pokemon");

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
  .then((response) => response.json())
  .then((json) => {
    yellowPokemon.printYellowPokemon(json.pokemon_species);
  })
  .catch((error) => {
    console.error(error);
  })


