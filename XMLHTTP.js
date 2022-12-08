let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.chucknorris.io/jokes/random");

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        document.getElementById("fact").innerHTML = data.value;
    }
}

xhr.send();