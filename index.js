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
    playerOneMark.push(this.id);
    playerOneMarkPVP.push(this.id);
    playerTwoMark.push("o");
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
    playerOneMark.push(this.id);
    playerOneMarkPVP.push(this.id);
    playerTwoMark.push("x");
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

$(".vs-player-button").on("click", function() {
    if (playerOneMark != "") {
        $(".new-game-flex-container").addClass("hide");
        if (playerOneMarkPVP[0] == "x") {
            playerOneMark =[];
            $(".game-display").removeClass("hide");
            $(".player-o").text("O (P2)");
            $(".player-x").text("X (P1)");
            playerOneTurnPVP();
        };
         if (playerOneMarkPVP[0] == "o") {
            playerOneMark = [];
            $(".game-display").removeClass("hide");
            $(".player-o").text("O (P1)");
            $(".player-x").text("X (P2)");
            playerTwoTurn();
         };
    };

});

function playerOneTurnPVP() {
    $(".game-tile").on("click", function(event) {
        if (availableTiles.indexOf(this.id) !== -1) {
            $("." + playerOneMarkPVP +"-" + this.id).removeClass("hide");
            playerOneMoves.push(this.id); 
            availableTiles.splice(availableTiles.indexOf(this.id),1);
            var hoverMark = (playerOneMark + "-hover-" + this.id);
            $("." + hoverMark).addClass("hide");  
            
            playerTwoTurn(); 
         }
        

         else if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-3") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            console.log(player1VsCpuWins);
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
         }


         else if (playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
            }

         else if (playerOneMoves.indexOf("tile-7") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
            }

         else if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
         }

         else if (playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
        }

         else if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
        }

         else if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
        }

         else if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMarkPVP + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerOneMarkPVP + "-score").text(player1VsCpuWins);
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

    });
    
    $(".game-tile").hover(function (event) {
    var hoverMark = (playerOneMarkPVP + "-hover-" + this.id);
        if(availableTiles.indexOf(this.id) !== -1) {
            $("." + hoverMark).removeClass("hide"); 
        };
    
    }, 
    function () {
        var hoverMark = (playerOneMarkPVP + "-hover-" + this.id);
        $("." + hoverMark).addClass("hide");   
    });

};

function playerTwoTurn() {
    $(".game-tile").on("click", function(event) {
        if (availableTiles.indexOf(this.id) !== -1) {
            $("." + playerTwoMark +"-" + this.id).removeClass("hide");
            playerTwoMoves.push(this.id); 
            availableTiles.splice(availableTiles.indexOf(this.id),1);
            var hoverMark = (playerTwoMark + "-hover-" + this.id);
            $("." + hoverMark).addClass("hide");  
            
            playerOneTurnPVP(); 
         }
        

         else if (playerTwoMoves.indexOf("tile-1") !== -1 && playerTwoMoves.indexOf("tile-2") !== -1 && playerTwoMoves.indexOf("tile-3") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            playerTwoWins += 1;
            console.log(playerTwoWins);
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
         }


         else if (playerTwoMoves.indexOf("tile-4") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-6") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            playerTwoWins += 1;
            console.log(playerTwoWins);
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
            }

         else if (playerTwoMoves.indexOf("tile-7") !== -1 && playerTwoMoves.indexOf("tile-8") !== -1 && playerTwoMoves.indexOf("tile-9") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            playerTwoWins += 1;
            console.log(playerTwoWins);
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
            }

         else if (playerTwoMoves.indexOf("tile-1") !== -1 && playerTwoMoves.indexOf("tile-4") !== -1 && playerTwoMoves.indexOf("tile-7") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
         }

         else if (playerTwoMoves.indexOf("tile-2") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-8") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
        }

         else if (playerTwoMoves.indexOf("tile-3") !== -1 && playerTwoMoves.indexOf("tile-6") !== -1 && playerTwoMoves.indexOf("tile-9") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
        }

         else if (playerTwoMoves.indexOf("tile-1") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-9") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
        }

         else if (playerTwoMoves.indexOf("tile-3") !== -1 && playerTwoMoves.indexOf("tile-5") !== -1 && playerTwoMoves.indexOf("tile-7") !== -1 ) {
            $(".winner-display-content-container").removeClass("hide");
            $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
            $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
            $("." + cpuMark + "-winner-mark-container").addClass("hide");
            $(".round-tied-container").addClass("hide");
            player1VsCpuWins += 1;
            $(".player-" + playerTwoMark + "-score").text(player2Wins);
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

    });
    
    $(".game-tile").hover(function (event) {
    var hoverMark = (playerTwoMark + "-hover-" + this.id);
        if(availableTiles.indexOf(this.id) !== -1) {
            $("." + hoverMark).removeClass("hide"); 
        };
    
    }, 
    function () {
        var hoverMark = (playerTwoMark + "-hover-" + this.id);
        $("." + hoverMark).addClass("hide");   
    });

};

// Game-Over Functions

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
        playerOneTurnPVP();
    }

    else if (playerOneMarkPVP[0] == "o") {
        playerTwoTurn();
    }
});


$(".restart-btn").on("click", function() {
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
        playerOneTurnPVP();
    }

    else if (playerOneMarkPVP[0] == "o") {
        playerTwoTurn();
    }
});