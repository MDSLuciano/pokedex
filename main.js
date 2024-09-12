
function convertPokemonTypesToDiv(pokemonTypes) {
    return pokemonTypes.map((typesSlot) => `<div class="tipo ${typesSlot.type.name}">${typesSlot.type.name}</div>`
    )
}

function convertHTML(pokemon) {
    return `
    <div class="pokemon">
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="Pokémon ${pokemon.name}" />
        <p class="numero">N. ${pokemon.order}</p>
        <p class="nome">${pokemon.name}</p>
        <div class="lista-tipos">
            ${convertPokemonTypesToDiv(pokemon.types).join("")}
        </div>
    </div>
    `
}

const divListaPokemons = document.getElementById("lista-pokemons")

pokeApi.getPokemons().then((pokemons = []) =>{
    const newHtml = pokemons.map(convertHTML).join('')
    divListaPokemons.innerHTML = newHtml
})

function aumentarPrimeiraLetra(palavra) {
    return palavra[0].toUpperCase() + palavra.substr(1)
}

