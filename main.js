const pokemonsList = document.getElementById("pokemonsList")
const loadMoreButton = document.getElementById("loadMoreButton")
const limit = 5
let offset = 0

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <div class="pokemon">
                <img src="${pokemon.photo}" alt="Pokémon ${pokemon.name}" />
                <p class="number">N. ${pokemon.number}</p>
                <p class="name">${pokemon.name}</p>
                <div class="lista-tipos">
                    ${pokemon.types.map((type) => `<div class="tipo ${type}">${type}</div>`).join(" ")}
                </div>
            </div>
        `
        ).join('')
        pokemonsList.innerHTML += newHtml
    })

}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})


