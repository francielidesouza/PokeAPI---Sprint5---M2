async function renderPokemons() {

    const ulTag = document.querySelector('.list__container')

    // Aqui utilizaremos o await para aguardar a resposta da função
    const listaDePokemons = await getAllPokemons()

    // Agora é só iterar sob o array e renderizar cada pokemon
    listaDePokemons.results.forEach((pokemon) => {
        // "Fatia" o número do pokemon na pokedex a partir da URL de cada pokemon
        const numeroNaPokedex = pokemon.url.slice(34, -1)
   
            ulTag.insertAdjacentHTML('beforeend', 
            `
                <li class="card__container">
                  <img class="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                   <h3 class="card__title">${pokemon.name}</h3>
                 </li>
            `
        )
    })   
}
renderSearch()

// setTimeout(() =>{
//     renderPokemons() 
//     renderSearch()
// }, 3000)

async function renderPokemonFound(pokemon){
    const ulTag = document.querySelector('.list__container')

    ulTag.innerHTML = ''

    ulTag.insertAdjacentHTML('beforeend', 
    `
        <li class="card__container">
          <img class="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt=${pokemon.name}>
           <h3 class="card__title">${pokemon.name}</h3>
        </li>
    `
    )
}
renderPokemons() 










































































// index.js

// async function renderizaLoadding() {
//     const liLoadding = document.querySelector('.card__container--loadding')

//     // Aqui utilizaremos o await para aguardar a resposta da função
//     const listaDePokemons = await consomePokeAPI()

//     liLoadding.insertAdjacentHTML('beforeend', `
//     <li class="card__container--loadding" id="loadding">
//     <p class="card__title--loadding">Carregando...</p>
//   </li>
//         `)
// }
// renderizaLoadding()
// Definimos essa função como assíncrona pois precisamos aguardar a resposta da função consomePokeAPI

// async function renderizaPokemons() {
//     const ulTag = document.querySelector('.list__container')

//     // Aqui utilizaremos o await para aguardar a resposta da função
//     const listaDePokemons = await consomePokeAPI()

//     // Agora é só iterar sob o array e renderizar cada pokemon
//     listaDePokemons.results.forEach(pokemon => {
//         // "Fatia" o número do pokemon na pokedex a partir da URL de cada pokemon
//         const numeroNaPokedex = pokemon.url.slice(34, -1)

//         ulTag.insertAdjacentHTML('beforeend', `
//             <li class="card__container">
//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
//                 <h3 class="card__title">${pokemon.name}</h3>
//             </li>
//         `)
//     })
// }

// // Chama a função para rodá-la ao carregar a página
// renderizaPokemons()

// function renderPokeAPI(arrayPokemons){
//     const containerList = document.querySelector('.list__container')

//     containerList.innerHTML = ''

//     arrayPokemons.forEach(pokemon => {
//         // const loadding = createLoadding()

//         // const search = createSearch(pokemon)

//         const card = createCard(pokemon)

//         containerList.append(card)
//     });
// }


// function createCard ({url, name}){
  
//     const li = document.createElement('li')
//     const img = document.createElement('img')
//     const h2 = document.createElement('h2')

//     li.classList.add('card__container')
//     h2.classList.add('card__title')

//     img.src = url
//     img.alt = name

//     h2.innerText = name

//     li.append(img, h2)

//     return li
// }

// function createLoadding (){
//     const li = document.createElement('li')
//     const p = document.createElement('p')

//     li.classList.add('card__container--loadding')
//     li.id = 'loadding'
//     p.classList.add('card__title--loadding')

//     p.innerText = 'Carregando...'

//     li.appendChild(p)

//     return li
// }


// function createSearch (){
    
//     // containerList.innerHTML = ''

//     const li = document.createElement('li')
//     const p = document.createElement('p')

//     li.classList.add('card__container--loadding')
//     li.id = 'loadding'
//     p.classList.add('card__title--loadding')

//     p.innerText = 'Carregando...'

//     li.appendChild(p)

//     return li
// }




