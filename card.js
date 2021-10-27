import { fetchData, getImageUrl } from "./fetchData.js";

// CARD STRUCTURE:

{/* <div id = pokemonName class='poke1 pokeCard pokemonType'>
    <h2 class = pokemonName ></h2>
    <div class='pokeImage'>
        <img src = linkToImg ></img>
    </div>
    <ul>
        <li>
            <p>Hp</p>
            <p>90</p>
        </li>
        <li>
            <p>Attack</p>
            <p>80</p>
        </li>
        <li>
            <p>Defense</p>
            <p>70</p>
        </li>
        <li>
            <p>Speed</p>
            <p>85</p>
        </li>
    </ul>
</div> */}

const selectDiv = (name, types, id) => {
    const pokeDiv = document.querySelector('.poke'+(id + 1));
    pokeDiv.classList.add('pokeCard', types[0]);
    pokeDiv.setAttribute('id', name);
    
    const pokeCard = document.createElement('div');
    pokeCard.setAttribute('id', name + '-child');

    pokeDiv.append(pokeCard);
    return pokeCard;
}

const createTitle = (name, parent) => {
    const pokeName = document.createElement('h2');
    pokeName.classList.add('pokeName');
    pokeName.innerText = name;
    parent.append(pokeName);
}

const createImageContainer = async(name, parent) => {
    const pokeUrl = await getImageUrl(name);

    const pokeImgContainer = document.createElement('div');
    pokeImgContainer.classList.add('pokeImage');
    
    const circle = document.createElement('div');
    circle.classList.add('circle');
    pokeImgContainer.append(circle);

    const pokeImg = document.createElement('img');
    pokeImg.setAttribute('src', pokeUrl);
    pokeImgContainer.append(pokeImg);

    parent.append(pokeImgContainer);
}

const createStatsList = (pokeStats, stats, parent) => {
    const listOfStats = document.createElement('ul');

    pokeStats.forEach((item) => {
        const li = document.createElement('li');
        const statItem = document.createElement('p');
        statItem.innerText = item;
        li.append(statItem);
        const statValue = document.createElement('p');
        statValue.innerText = stats[item];
        li.append(statValue);
        listOfStats.append(li);
    });

    parent.append(listOfStats);
}

export const createCard = async(name, id) => {
    const pokeStats  = ['hp', 'attack', "special-attack", 'defense', "special-defense", 'speed'];
    const [stats, types] = await fetchData(name);
    
    const pokeCard = selectDiv(name, types,  id);
    createTitle(name, pokeCard);
    await createImageContainer(name, pokeCard);

    createStatsList(pokeStats, stats, pokeCard);
};
