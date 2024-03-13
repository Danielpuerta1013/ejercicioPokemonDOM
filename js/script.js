let pokemons=[]
function capturarValor() {
    numeroPokemon=document.getElementById('numeroPokemon').value    
    console.log(pokemons)
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}/`
    fetch(apiUrl)
    .then(respuesta=>respuesta.json())    
    
    .then(data=>{
        console.log(data)
        pokemons.push(data)
        mostrarPokemon();
                  
    })
    .catch(respuesta=>{respuesta})
    
}

function mostrarPokemon() {
    document.getElementById('cards').innerHTML = ""
    pokemons.map(pokemon=>{
        let card=document.createElement('section')
        card.className='tarjeta'
        let imagen=document.createElement('img')
        imagen.src = pokemon.sprites.front_default;
        let titulo=document.createElement('h3')
        titulo.textContent = pokemon.name;
        card.append(imagen,titulo)
        document.getElementById('cards').append(card)
        
    })    
    
}