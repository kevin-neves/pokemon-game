import { evaluateChampion } from "./champion.js"
import { createCard } from "./card.js";

const defaultName = ['pikachu', 'moltres', 'articuno'];

const clearPokes = (data) => {
    data.forEach((item, index) => {
        const pokeDiv = document.querySelector('.poke' + (index + 1));
        pokeDiv.classList.remove(pokeDiv.classList[2])
        const childToRemove = document.querySelector('#' + item + '-child');
        pokeDiv.removeChild(childToRemove); 
    });
    
}

export const clickListener = (id) => {
    const btn = document.querySelector(id);
    const option = document.querySelector('#attributes');
    btn.addEventListener('click', () => evaluateChampion(option.value));
}


export const onChangeListener = (index, data) => {
    const id = 'poke' + index;
    const selected = document.getElementById(id);
    
    selected.addEventListener('change', (e) => {
        clearPokes(data);
        data[index - 1] = selected.value !== 'null' ? selected.value : defaultName[index - 1];
        data.forEach(async(item, id) => await createCard(item, id));
    });
};