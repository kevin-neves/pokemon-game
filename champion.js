import { fetchData } from "./fetchData.js"

const addGreyAttribute = async(statsList, pokeList) => {
    const biggest = statsList.reduce((acc, item) => acc >= item ? acc : item, 0)
    const smaller = pokeList.filter((poke) => poke.stat < biggest);

    smaller.forEach((poke) => {
        const pokeCard = document.getElementById(poke.name);
        pokeCard.classList.add('grey');
        setTimeout(() => pokeCard.classList.remove('grey'), 2000);
    });
};

const createLists = async({poke, pokeList, statsList, option, last}) => {
    const pokeName = poke.innerText.toLowerCase();
    const [ stats ] = await fetchData(pokeName);
    pokeList.push({name: pokeName, stat: stats[option]});
    statsList.push( stats[option] );
    if (last) { addGreyAttribute(statsList, pokeList) };
    return [pokeList, statsList];
}


export const evaluateChampion = async(option) => {
    const pokeCards = document.querySelectorAll('.pokeName');
    const pokeList = [];
    const statsList = [];
    pokeCards.forEach(async(poke, index) => {
        let last = false;
        if (index === pokeCards.length - 1) last = true; 
        createLists({poke, pokeList, statsList, option, last})
    });
};