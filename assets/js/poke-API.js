
const pokeApi = {}

pokeApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset,limit) => {
    const url =  `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
        .then((detailrequest) => Promise.all(detailrequest))
        // .then((pokemonDel) => console.log(pokemonDel[0]))
        .catch((error) => console.error(error))
}

