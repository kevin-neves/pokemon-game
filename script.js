import { createCard } from "./card.js";
import { clickListener, onChangeListener } from "./eventListeners.js";
import { createListPokes } from "./createListOfPokemons.js";

let listOfPokemons = ['bulbasaur', 'charmander', 'squirtle'];
clickListener('#btn')
createListPokes()

listOfPokemons.forEach(async(item, index) => await createCard(item, index));

onChangeListener(1, listOfPokemons);
onChangeListener(2, listOfPokemons);
onChangeListener(3, listOfPokemons);
