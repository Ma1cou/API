let pokemonName= "";

  function loadCache() {
    var cache = document.getElementById("cache");
    cache.innerHTML = "";

      for (let index = 0; index < localStorage.length; index++) {
        let name = localStorage.key(index)
        let nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
        cache.innerHTML +=
        `<li id="localpokemons" <a href="#" onclick="requestPokemon('${name}')">${nameUpper}</a></li>`;   
      }
  };

    function displayPokemon(pokemonData) 
    {
        let imageurl = pokemonData['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        document.getElementById("artwork").setAttribute("src", imageurl);
        //document.getElementById("stats").innerHTML = pokemonData.stats;
        let firstLetter = pokemonData.name.charAt(0);
        let remainingLetters = pokemonData.name.substring(1);
        let firstLetterCap = firstLetter.toUpperCase();
        let nameCapitalized = firstLetterCap + remainingLetters;


        document.getElementById("title").innerHTML = nameCapitalized;
        document.getElementById("xp").innerHTML = "Base XP: " + pokemonData.base_experience;
        document.getElementById("weight").innerHTML = "Weight: " + pokemonData.weight; + " lbs";
        document.getElementById("height").innerHTML = "Height: " + pokemonData.height; + " ft";

        document.getElementById("types").innerHTML = "";

        pokemonData.types.forEach(type => {
          document.getElementById("types").innerHTML += `<p>${type.type.name}</p>`;
        });


        document.getElementById("stats").innerHTML = "";
        document.getElementById("stats").innerHTML += "<h3>Stats</h3>";
        for (let index = 0; index < pokemonData.stats.length; index++) {
          var stat = pokemonData.stats[index];
          document.getElementById("stats").innerHTML +=
          `<li> ${index + 1}: ${stat.stat.name}, base value: ${stat.base_stat}, effort: ${stat.effort} </li><br>`
        }

        document.getElementById("abilities").innerHTML = "";
        document.getElementById("abilities").innerHTML += "<h3>Abilities</h3>";
        pokemonData.abilities.forEach(ability => {
          document.getElementById("abilities").innerHTML +=
          `<li>${ability.ability.name}</li>`
        });

        document.getElementById("moves").innerHTML = "";
        pokemonData.moves.forEach(move => {
          document.getElementById("moves").innerHTML +=
          `<li>${move.move.name}</li>`
        })
        loadCache();
    }

    function storePokemon(pokemon) {
      console.log("Tallennetaan: " + pokemon);
      window.localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
      displayPokemon(pokemon);
    }

    function requestPokemon(cachedName = "") {

      if(cachedName !== "") {
        pokemonName = cachedName;
      }
      else
        pokemonName = document.getElementById('name').value;
        
  var storedPokemon = localStorage.getItem(pokemonName);
  
  if(localStorage.getItem(pokemonName) !== null) {
    console.log("Pokemon löytyi localStoragesta! Ladataan...")
    displayPokemon(JSON.parse(storedPokemon));
  }
  else 
  {

    console.log("Ei löytynyt! Haetaan PokeApista...")

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => storePokemon(data));
  }
}
function randomPokemon() {
  console.log("Haetaan satunnainen Pokemon PokeApista...");

  fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then(response => response.json())
  .then(data => {
    let allPokemonCount = data.count;
    console.log("Pokemoneja yhteensä: " + allPokemonCount);
    let randomPokemonId = Math.floor(Math.random() * (allPokemonCount -1));
    console.log("Arvottu id :" + randomPokemonId);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
    .then(response => response.json())
    .then(data => {
      storePokemon(data);

    });
  });


}