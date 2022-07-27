const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')

const fetchPokemon = async (pokemon) => { // so da pra usar o await com o async.
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) // await quer dizer que vai esperar o fetch ser concluido ai dps continua o codigo.
    const data = await APIResponse.json()  // vai extrair o json da requisição API  .
    return data // para utilizar os dados dessa função em outra função.
}

const renderPokemon = async (pokemon) => { // função q vai pegar os dados da funçao acima e renderizar na tela.
    const data = await fetchPokemon(pokemon)

    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

}

renderPokemon('25')