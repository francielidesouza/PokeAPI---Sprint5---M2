// requests.js

async function getAllPokemons() {

    try{

        const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon', {
             method: 'GET',
             headers: {
                'Content-Type': 'application/json'
             }
        })
            .then((res) => res.json())
            .then(res => {
            const loadding = document.querySelector('.card__title--loadding')
            loadding.classList.add('hidden')
             return res
             })

        return pokemons

    } catch(error){
        console.log(error);
    }
}

async function getPokemonsByName(pokemonName) {

    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => console.log(res.json()))
    .then((res) => {
        const loadding = document.querySelector('.card__title--loadding')
        loadding.classList.add('hidden')
        return res
    })
    return pokemon
}

function renderSearch(){
    const header = document.querySelector('.header__container')

    header.insertAdjacentHTML('beforeend', 
        `
            <form class="header__form">
                <input type="search" placeholder="Pesquisar por..." class="form__input" value="">
                <button class="form__btn" id="search__btn"><img src="./src/assets/search-icon.png" alt="Search Icon" type="submit"></button>
            </form>
        `
    )

    const searchInput = document.querySelector('.form__input')
    const searchBtn = document.querySelector('.form__btn')

    searchBtn.addEventListener('click', async (event) => {        
      
        event.preventDefault()
  
        if(searchInput.value != 0){
            renderPokemonFound(await getPokemonsByName(searchInput.value))
        }else{
            searchInput.innerHTML = ''       
            renderPokemons()
        }        
    })
}

// getAllPokemons()
// renderSearch()














































// // Seleciona o elemento que representa o loading da requisição
// const loading = document.querySelector('.card__title--loadding')

// async function getAllPokemons() {

//     const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

//         .then(res => res.json())
//         .then((res) => {

//             const li = document.querySelector(".card__container--loadding")

//             li.remove()

//             return res
//         })

//     // Retorna esse valor convertido
//     return pokemons.results
// }









// // Seleciona o elemento que representa o loading da requisição
// const loading = document.querySelector('.card__title--loadding')

// async function getAllPokemons() {

//     const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

//         .then(res => res.json())
//         .then((res) => {

//             const li = document.querySelector(".card__container--loadding")

//             li.remove()

//             return res
//         })

//     // Retorna esse valor convertido
//     return pokemons.results
// }


// async function getPokemonsByName(pokemonName) {

//     const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => res.json())
//         .then(res => {
//             // render(res.results)
//             return res
//         })

//     return pokemon
// }

// function renderSearch(){
//     const searchInput = document.querySelector('.form__input')
//     const searchBtn = document.querySelector('.form__btn')

//     searchBtn.addEventListener('click', () => {
//         getPokemonsByName(searchInput.value)
//     })
// }

// async function getPokemonsByName(pokemonName) {

//     const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(res => {
//         console.log(res);
//         render(res.results)
      
//         return res
//     }) 
//     return pokemon
// }

// function renderSearch(){
//     const searchInput = document.querySelector('.form__input')
//     const searchBtn = document.querySelector('.form__btn')

//     searchBtn.addEventListener('click', () => {
//         getPokemonsByName(searchInput.value)
//     })
// }


// const pokemon = getPokemonsByName('bulbasaur')
// console.log(pokemon);

// function renderSearch({

// })


// const {results} = arrayPokemons

// arrayPokemons.forEach( pokemon => {
//     const {url, name} = pokemon
//     console.log({url, name});
// })







