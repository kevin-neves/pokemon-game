import { fetchListOfPokes } from "./fetchData.js";

const createOptions = async(id) => {
    const selector = document.getElementById(id);
    const { results } = await fetchListOfPokes();

    results.forEach(async(item) => {
        const {name} = await item;
        const option = document.createElement('option');
        option.setAttribute('value', name);
        option.innerText = name;
        selector.append(option)
    })
}

export const createListPokes = () => {
    const listSelectors = ['poke1', 'poke2', 'poke3']
    listSelectors.forEach((selector) => createOptions(selector))
};