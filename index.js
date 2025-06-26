var playerOneMark = [];
var playerOneMarkPVP = [];
var playerTwoMark = [];
var cpuMark = [];

var playerOneMoves = [];
var playerTwoMoves = [];
var cpuMoves = [];
var availableTiles = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9"];

var player1VsCpuWins = 0;
var cpuWins = 0;
var player2Wins = 0;
var tieCount = 0;


// New Game Functions
$(".select-x").on("click", function(event) {
    $(".select-x").addClass("selected");
    $(".x-outline").addClass("hide");
    $(".x-outline-silver").removeClass("hide");
    playerOneMark = [];
    playerOneMarkPVP =[];
    playerTwoMark = [];
    cpuMark = [];
    players[0].symbol = [];
    players[1].symbol = [];
    playerOneMark.push(this.id);
    playerOneMarkPVP.push(this.id);
    players[0].symbol = 'x';
    playerTwoMark.push("o");
    players[1].symbol = 'o';
    cpuMark.push("o");

    $(".select-o").removeClass("selected");
    $(".o-outline").removeClass("hide");
    $(".o-outline-silver").addClass("hide");
});

$(".select-o").on("click", function() {
    $(".select-o").addClass("selected");
    $(".o-outline").addClass("hide");
    $(".o-outline-silver").removeClass("hide");
    playerOneMark = [];
    playerTwoMark =[];
    cpuMark = [];
    players[0].symbol = [];
    players[1].symbol = [];
    playerOneMark.push(this.id);
    playerOneMarkPVP.push(this.id);
    players[0].symbol = 'o';
    playerTwoMark.push("x");
    players[1].symbol = 'x';
    cpuMark.push("x");

    $(".select-x").removeClass("selected");
    $(".x-outline").removeClass("hide");
    $(".x-outline-silver").addClass("hide");
});

// Player/CPU turns

$(".vs-cpu-button").on("click", function() {
    if (playerOneMark != "") {
        $(".new-game-flex-container").addClass("hide");
        if (playerOneMark[0] == "x") {
            playerOneMarkPVP = [];
            $(".game-display").removeClass("hide");
            playerOneTurn();
        };
         if (playerOneMark[0] == "o") {
            playerOneMarkPVP = [];
            $(".game-display").removeClass("hide");
            $(".player-o").text("O (YOU)");
            $(".player-x").text("X (CPU)");
            setTimeout(cpuTurn, 1000);
         }
    };
});

function playerOneTurn() {
   
    if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-3") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        player1VsCpuWins += 1;
        console.log(player1VsCpuWins);
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }


    else if (playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        player1VsCpuWins += 1;
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }

    else if (playerOneMoves.indexOf("tile-7") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        player1VsCpuWins += 1;
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }

    else if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        player1VsCpuWins += 1;
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }

    else if (playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        player1VsCpuWins += 1;
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }

        else if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        player1VsCpuWins += 1;
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }

    else if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        player1VsCpuWins += 1;
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }

    else if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
        player1VsCpuWins += 1;
        $(".player-" + playerOneMark + "-score").text(player1VsCpuWins);
    }

    else if (availableTiles.length === 0) {
        $(".player-wins-text").addClass("hide");
        $(".x-winner-mark-container").addClass("hide");
        $(".o-winner-mark-container").addClass("hide");
        $(".round-tied-container").removeClass("hide");
        $(".winner-display-content-container").removeClass("hide");
        tieCount += 1;
        $(".tie-score").text(tieCount);
    }

    else if ($(".winner-display-content-container").hasClass("hide")){
        $(".game-tile").on("click", function(event) {
            if (availableTiles.indexOf(this.id) !== -1) {
                $("." + playerOneMark +"-" + this.id).removeClass("hide");
                playerOneMoves.push(this.id); 
                availableTiles.splice(availableTiles.indexOf(this.id),1);
                var hoverMark = (playerOneMark + "-hover-" + this.id);
                $("." + hoverMark).addClass("hide");  

                
                
                setTimeout(cpuTurn, 1000); 
            };
        });
    };
    
    $(".game-tile").hover(function (event) {
    var hoverMark = (playerOneMark + "-hover-" + this.id);
        if(availableTiles.indexOf(this.id) !== -1) {
            $("." + hoverMark).removeClass("hide"); 
        };
    
    }, 
    function () {
        var hoverMark = (playerOneMark + "-hover-" + this.id);
        $("." + hoverMark).addClass("hide");   
    });

};

function cpuTurn() {

    if ($(".winner-display-content-container").hasClass("hide")) {
        console.log($(".winner-display-content-container").hasClass("hide"));
        var numberOfFreeTiles = Math.floor(availableTiles.length);
        var randomNumber = [];
        randomNumber.push(Math.floor(Math.random() * numberOfFreeTiles));
        cpuChosenTile = availableTiles[randomNumber[0]];
        $("." + cpuMark + "-" + cpuChosenTile).removeClass("hide");
        cpuMoves.push(cpuChosenTile);
        availableTiles.splice(randomNumber,1); 
    }
    
    
   else if (cpuMoves.indexOf("tile-1") !== -1 && cpuMoves.indexOf("tile-2") !== -1 && cpuMoves.indexOf("tile-3") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    else if (cpuMoves.indexOf("tile-4") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-6") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    else if (cpuMoves.indexOf("tile-7") !== -1 && cpuMoves.indexOf("tile-8") !== -1 && cpuMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    else if (cpuMoves.indexOf("tile-1") !== -1 && cpuMoves.indexOf("tile-4") !== -1 && cpuMoves.indexOf("tile-7") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    else if (cpuMoves.indexOf("tile-2") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-8") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    else if (cpuMoves.indexOf("tile-3") !== -1 && cpuMoves.indexOf("tile-6") !== -1 && cpuMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    else if (cpuMoves.indexOf("tile-1") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    else if (cpuMoves.indexOf("tile-3") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-7") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $(".round-tied-container").addClass("hide");
        cpuWins += 1;
        $(".player-" + cpuMark + "-score").text(cpuWins);
    }

    if (availableTiles.length === 0) {
        $(".player-wins-text").addClass("hide");
        $(".x-winner-mark-container").addClass("hide");
        $(".o-winner-mark-container").addClass("hide");
        $(".round-tied-container").removeClass("hide");
        $(".winner-display-content-container").removeClass("hide");
        tieCount += 1;
        $(".tie-score").text(tieCount);
    }

    else {
       playerOneTurn(); 
    }
};

// PVP Functions

let players = [
            { name: "Player 1", symbol: [], active: true },
            { name: "Player 2", symbol: [], active: false }
        ];

let currentPlayerIndex = 0;

 function switchTurn() {
            players[currentPlayerIndex].active = false;
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            $(".player-turn-text").text(players[currentPlayerIndex].symbol + " TURN");
            players[currentPlayerIndex].active = true;
            playerTurnPVP();
        };

$(".vs-player-button").on("click", function() {
    if (playerOneMark != "") {
        $(".new-game-flex-container").addClass("hide");
        if (playerOneMarkPVP[0] == "x") {
            playerOneMark =[];
            $(".game-display").removeClass("hide");
            $(".player-o").text("O (P2)");
            $(".player-x").text("X (P1)");
            playerTurnPVP();
        };
         if (playerOneMarkPVP[0] == "o") {
            playerOneMark = [];
            $(".game-display").removeClass("hide");
            $(".player-o").text("O (P1)");
            $(".player-x").text("X (P2)");
            switchTurn();
         };
    };

});


function playerTurnPVP() {
    $(".game-tile").on("click", function(event) {
        if (availableTiles.indexOf(this.id) !== -1 && players[currentPlayerIndex].active) {
            var currentPlayerSymbol = players[currentPlayerIndex].symbol;
            $("." + currentPlayerSymbol +"-" + this.id).removeClass("hide");
            availableTiles.splice(availableTiles.indexOf(this.id),1);
            var hoverMark = (currentPlayerSymbol + "-hover-" + this.id);
            $("." + hoverMark).addClass("hide");
            // $(".player-turn-text").text(currentPlayerSymbol + " TURN");

            if (players[0].active == true) {
                playerOneMoves.push(this.id);
            }

            if (players[1].active == true) {
                playerTwoMoves.push(this.id);
            }
             
            if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-3") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                console.log(player1VsCpuWins);
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }


            else if (playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }

            else if (playerOneMoves.indexOf("tile-7") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }

            else if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }

            else if (playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }

            else if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }

            else if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }

            else if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                player1VsCpuWins += 1;
                $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
                $(".player-wins-text").text("PLAYER 1 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-1") !== -1 && playerTwoMoves.indexOf("tile-2") !== -1 && playerTwoMoves.indexOf("tile-3") !== -1 ) {
                $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-4") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-6") !== -1 ) {
                 $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-7") !== -1 && playerTwoMoves.indexOf("tile-8") !== -1 && playerTwoMoves.indexOf("tile-9") !== -1 ) {
                 $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-1") !== -1 && playerTwoMoves.indexOf("tile-4") !== -1 && playerTwoMoves.indexOf("tile-7") !== -1 ) {
                 $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-2") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-8") !== -1 ) {
                 $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-3") !== -1 && playerTwoMoves.indexOf("tile-6") !== -1 && playerTwoMoves.indexOf("tile-9") !== -1 ) {
                 $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-1") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-9") !== -1 ) {
                 $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (playerTwoMoves.indexOf("tile-3") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-7") !== -1 ) {
                 $(".winner-display-content-container").removeClass("hide");
                $("." + playerOneMarkPVP + "-winner-mark-container").addClass("hide");
                $("." + cpuMark + "-winner-mark-container").addClass("hide");
                $(".round-tied-container").addClass("hide");
                $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
                player2Wins += 1;
                $(".player-" + playerTwoMark + "-score").text(player2Wins);
                $(".player-wins-text").text("PLAYER 2 WINS");
            }

            else if (availableTiles.length === 0) {
                $(".player-wins-text").addClass("hide");
                $(".x-winner-mark-container").addClass("hide");
                $(".o-winner-mark-container").addClass("hide");
                $(".round-tied-container").removeClass("hide");
                $(".winner-display-content-container").removeClass("hide");
                tieCount += 1;
                $(".tie-score").text(tieCount);
            }

            
        switchTurn();
     
        }

    });
    
    $(".game-tile").hover(function (event) {
        var currentPlayerSymbol = players[currentPlayerIndex].symbol;
        var hoverMark = (currentPlayerSymbol + "-hover-" + this.id);
        if(availableTiles.indexOf(this.id) !== -1) {
            $("." + hoverMark).removeClass("hide"); 
        };
    
    }, 
    function () {
        var currentPlayerSymbol = players[currentPlayerIndex].symbol;
        var hoverMark = (currentPlayerSymbol + "-hover-" + this.id);
        $("." + hoverMark).addClass("hide");   
    });

};

// Quit, Restart, Next-Round

$(".quit-btn").on("click", function() {
    playerOneMoves = [];
    playerTwoMoves = [];
    cpuMoves = [];
    availableTiles = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9"];
    playerOneMark = [];
    playerTwoMark = [];
    cpuMark = [];
    player1VsCpuWins = 0;
    cpuWins = 0;
    player2Wins = 0;

    $(".x").addClass("hide");
    $(".o").addClass("hide");
    $(".new-game-flex-container").removeClass("hide");
    $(".game-display").addClass("hide");
    $(".winner-display-content-container").addClass("hide");
    $(".player-x-score").text("0");
    $(".player-o-score").text("0");
    $(".tie-score").text("0");
    $(".select-x").removeClass("selected");
    $(".select-o").removeClass("selected");
});


$(".next-round-btn").on("click", function() {
    playerOneMoves = [];
    playerTwoMoves = [];
    cpuMoves = [];
    availableTiles = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9"];
    $(".x").addClass("hide");
    $(".o").addClass("hide");
    $(".winner-display-content-container").addClass("hide");

    if (playerOneMark[0] == "x") {
        playerOneTurn();
    }

    else if (playerOneMark[0] == "o") {
        setTimeout(cpuTurn(), 1000);
    }

    else if (playerOneMarkPVP[0] == "x") {
        currentPlayerIndex = 1;
        switchTurn();
    }

    else if (playerOneMarkPVP[0] == "o") {
        currentPlayerIndex = 0;
        switchTurn();
    }
});

$(".restart-btn").on("click", function() {
    $(".yes-restart-container").removeClass("hide");
});

$(".cancel-btn").on("click", function () {
    $(".yes-restart-container").addClass("hide");
})

$(".yes-restart-btn").on("click", function() {
    playerOneMoves = [];
    playerTwoMoves = [];
    cpuMoves = [];
    availableTiles = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9"];
    $(".x").addClass("hide");
    $(".o").addClass("hide");
    $(".winner-display-content-container").addClass("hide");
    $(".yes-restart-container").addClass("hide");

    if (playerOneMark[0] == "x") {
        playerOneTurn();
    }

    else if (playerOneMark[0] == "o") {
        setTimeout(cpuTurn(), 1000);
    }

    else if (playerOneMarkPVP[0] == "x") {
        currentPlayerIndex = 0;
        playerTurnPVP();
    }

    else if (playerOneMarkPVP[0] == "o") {
        currentPlayerIndex = 1;
        playerTurnPVP();
    }
});