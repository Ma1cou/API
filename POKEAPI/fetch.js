let pokemonName= "";

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(Response => Response.json())
    .then(data => displayPokemon(data));

    function displayPokemon(pokemonData) {
        document.getElementById("result").innerHTML = pokemonData;
        document.getElementById("artwork").setAttribute("src", pokemonData.sprites.other.official-artwork.front_default);
      //  console.log(pokemonData);
      console.log(pokemonData.sprites.other.official-artwork.front_default);
    }

    function requestPokemon() {
        pokemonName = document.getElementById('name').value;

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => displayPokemon(data));
    }