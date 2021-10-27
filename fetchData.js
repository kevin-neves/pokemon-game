
const reducerToObj = (acc, stat) => {
    const { base_stat, stat : { name }} = stat;
    return acc = {...acc, [name] : base_stat};
}

export const fetchData = async(name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    const {stats, types} = await response.json();
    const pokeStats = stats.reduce(reducerToObj, {});
    const pokeTypes = types.reduce((acc, {type: {name}}) => {
        acc.push(name);
        return acc;
    }, []);
    return [ pokeStats, pokeTypes ];
}

export const fetchListOfPokes = async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    const response = await fetch(url);
    const pokemonList = await response.json();
    return pokemonList;
}

export const getImageUrl = async(name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    const {id} = (await response.json());
    let number = id.toString();
    while (number.length < 3) { 
       number =  '0' + number
    };
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`
}