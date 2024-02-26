const firstList = document.getElementById("firstList");
let limit = 1;
let offset = fnumeroAleatorioFunc();

function fnumeroAleatorioFunc(){
    return parseInt(Math.random()*156);
}

function convertPokemonsList (pokemonName){
    return `    <div class="sera">
                    <div class="image ${pokemonName.types[0].type.name}">
                    <img style width="${transformWidthToClass(pokemonName.weight)}%" src="${pokemonName.sprites.other.dream_world.front_default}"
                        <ol  class="firstList">
                        </ol>
                    </div>
                    <div class="escriba">
                        <p>#${pokemonName.id}</p>
                        <p>${pokemonName.name}</p>
                        <div class="type">
                            <ul class="types">                            
                                ${forTypes(pokemonName)}                   
                            </ul>
                            <ul class="status">
                                <li><p class="status">hp</p></li>
                                <li>${pokemonName.stats[0].base_stat}</li>
                                <li><input type="range" class="volume" min="0" max="250" value="${pokemonName.stats[0].base_stat}" step="1" /></li>
                            </ul>
                            <ul class="status">
                                <li><p class="status">attack</p></li>
                                <li>${pokemonName.stats[1].base_stat}</li>
                                <li><input type="range" class="volume" min="0" max="250" value="${pokemonName.stats[1].base_stat}" step="1" /></li>
                            </ul>
                            <ul class="status">
                                <li><p class="status">defense</p></li>
                                <li>${pokemonName.stats[2].base_stat}</li>
                                <li><input type="range" class="volume" min="0" max="250" value="${pokemonName.stats[2].base_stat}" step="1" /></li>
                            </ul>
                            <ul class="status">
                                <li><p class="status">sp-attack</p></li>
                                <li>${pokemonName.stats[3].base_stat}</li>
                                <li><input type="range" class="volume" min="0" max="250" value="${pokemonName.stats[3].base_stat}" step="1" /></li>
                            </ul>
                            <ul class="status">
                                <li><p class="status">sp-defense</p></li>
                                <li>${pokemonName.stats[4].base_stat}</li>
                                <li><input type="range" class="volume" min="0" max="250" value="${pokemonName.stats[4].base_stat}" step="1" /></li>
                            </ul>
                            <ul class="status">
                                <li><p class="status">speed</p></li>
                                <li>${pokemonName.stats[5].base_stat}</li>
                                <li><input type="range" class="volume" min="0" max="250" value="${pokemonName.stats[5].base_stat}" step="1" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
}


function forTypes(pokemonName){
    let arr = [];
    for(let i = 0; i < pokemonName.types.length; i++){
        arr[i] = `<li class="typesLi ${pokemonName.types[i].type.name}">${pokemonName.types[i].type.name}</li>`
        console.log(pokemonName.types[i].type.name)
        console.log(arr[i]);
    }
    return arr.join('')
}


   function pokemonsPage(offset,limit){ pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
        firstList.innerHTML += pokemons.map(convertPokemonsList).join('')
    })
   }

   
pokemonsPage(offset,limit);
   
var image = document.getElementsByClassName("image");
var escriba = document.getElementsByClassName("escriba");
var sera = document.getElementsByClassName("sera");
const bot = document.getElementById("bot");
//Event Listener CLick for Page Next
    bot.addEventListener("click", function(){
        
        sera[0].remove();
        // image[0].remove();
        // escriba[0].remove();

        // offset = offset + limit;
        pokemonsPage(fnumeroAleatorioFunc(),limit);

    })

function transformWidthToClass(tamanho){

    return 70;
    
}


document.getElementById("volume").disabled = true;
