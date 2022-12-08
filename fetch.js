fetch('https://api.chucknorris.io/jokes/random')
    .then(Response => Response.json())
    .then(data => displayFact(data));

    function displayFact(factData) {
        document.getElementById("fact").innerHTML = factData.value
        console.log(factData);
    }