let button = document.getElementById("search-btn");
let pkmInput = document.getElementById("pokemonName"); 
const alert= document.getElementById("alert")
const infPokemon=document.getElementById("infPokemon")


    
function searchPokemon(){
    let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    let url=`https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
    .then((response)=>{
        if(response.status===404){  
            alert.removeAttribute("hidden")
            infPokemon.setAttribute("hidden",true)
        }
        let data = response.json()
            .then((data)=>{
            alert.setAttribute("hidden", true)
            infPokemon.removeAttribute("hidden")
            document.getElementById("image").setAttribute("src",data.sprites.other.dream_world.front_default)
            document.getElementById("name").innerText=`name: ${data.name}`
            document.getElementById("id").innerText=`ID: ${data.id}`
            document.getElementById("height").innerText=`Height: ${data.height}`
            document.getElementById("weight").innerText=`weight: ${data.weight}`
            document.getElementById("type").innerText=`Type: ${data.types[0].type.name}`
        })
    })
}


button.addEventListener("click",(e)=>{
    searchPokemon(pokemonName);
});
pkmInput.addEventListener("keydown", (e)=> {
    if(e.keyCode === 13 && document.getElementById("pokemonName").value) {
        searchPokemon(pokemonName);
    }
});

pkmInput.addEventListener('input', function (evt) {
    if (document.getElementById("pokemonName").value) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', true)
    }
});