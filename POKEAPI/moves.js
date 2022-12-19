class Game {
    constructor(title) {
        this.title = title;
        this.moves = [];
    }
}

class Move {
    constructor(title) {
        this.title = title;
        this.learnMethod = "no method";
        this.learnLevel = 99999;
    }
}

function getMoves(pokemonData) {
    console.log("Näytetään Pokemonin liikkeet...")
    var moves = pokemonData.moves;
    var cachedGames = [];

    // Luupataan läpi pokemonin kaikki liikkeet...
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];

        var gamesList = move.version_group_details;

        for (let g = 0; g < gamesList.length; g++) {
            const game = gamesList[g];

               if(cachedGames.findIndex(cachedGame => cachedGame.title === game.version_group.name) <= -1) {
                cachedGames.push(new Game(game.version_group.name));
            }

               const gameFound = cachedGames.findIndex(cachedGame => cachedGame.title === game.version_group.name)
               if(gameFound > -1) {

                cachedGames(gameFound).moves.findIndex(cachedMove => cachedGames[gameFound.moves]

                const gameIndexInData = gamesList.findIndex(game => game.version_group.name === cachedGames [gameFound].title)

               newMove = new Move(move.move.name);
               newMove.learnMethod = gamesList[gameIndexInData].move_learn_method.name;
               newMove.learnLevel = gamesList[gameIndexInData].level_learned_at;

               cachedGames[gameFound].moves.push(newMove);
            }
        } 
    }  
    displayMoves(cachedGames)
}

function displayMoves(cachedGames) {

    const movesDiv = document.getElementById("moves");
    
    document.getElementById("moves").innerHTML = "";
    document.getElementById("moves").innerHTML += "<h3>Moves</h3>";

    for (let i = 0; i < cachedGames.length; i++) {
        const element = cachedGames[i];
        
        movesDiv.innerHTML += `<h4>${game.title}</h4>`;
        movesDiv.innerHTML += `<ol id='${game.title}'></ol>`;

        for (let m = 0; m < game.moves.length; m++) {
            const move = game.moves[m];

            document.getElementById(`${game.title}`).innerHTML += `<li>${move.title}, ${move.learnMethod}, ${move.learnMethod}</li>`
            
        }
    }
}
