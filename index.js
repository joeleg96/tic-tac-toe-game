var playerOneMark = [];
var playerTwoMark = [];
var cpuMark = [];

var playerOneMoves = [];
var playerTwoMoves = [];
var cpuMoves = [];
var availableTiles = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9"];


// New Game Functions
$(".select-x").on("click", function(event) {
    $(".select-x").addClass("selected");
    $(".x-outline").addClass("hide");
    $(".x-outline-silver").removeClass("hide");
    playerOneMark = [];
    playerTwoMark = [];
    cpuMark = [];
    playerOneMark.push(this.id);
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
    playerTwoMark.push("x");
    cpuMark.push("x");

    $(".select-x").removeClass("selected");
    $(".x-outline").removeClass("hide");
    $(".x-outline-silver").addClass("hide");
});

$(".vs-cpu-button").on("click", function() {
    if (playerOneMark != "") {
        $(".new-game-flex-container").addClass("hide");
        if (playerOneMark[0] == "x") {
            playerOneTurn();
        };
         if (playerOneMark[0] == "o") {
            setTimeout(cpuTurn, 2000);
         }
    };

});

$(".vs-player-button").on("click", function() {
    if (playerOneMark != "") {
        $(".new-game-flex-container").addClass("hide");
    }
});

function playerOneTurn() {
    $(".game-tile").on("click", function(event) {
        if (availableTiles.indexOf(this.id) !== -1) {
            $("." + playerOneMark +"-" + this.id).removeClass("hide");
            playerOneMoves.push(this.id); 
            // console.log("index of player chosen " + availableTiles.indexOf(this.id));
            availableTiles.splice(availableTiles.indexOf(this.id),1);
            // console.log("after player turn" + availableTiles);
            var hoverMark = (playerOneMark + "-hover-" + this.id);
            $("." + hoverMark).addClass("hide");  
        }
        

        if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-3") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    };

    if (playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 ) {
         $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    };

    if (playerOneMoves.indexOf("tile-7") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
         $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    };

    if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-4") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
         $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    };

    if (playerOneMoves.indexOf("tile-2") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-8") !== -1 ) {
         $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    };

    if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-6") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
         $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    };

    if (playerOneMoves.indexOf("tile-1") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-9") !== -1 ) {
         $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    };

    if (playerOneMoves.indexOf("tile-3") !== -1 && playerOneMoves.indexOf("tile-5") !== -1 && playerOneMoves.indexOf("tile-7") !== -1 ) {
         $(".winner-display-content-container").removeClass("hide");
        $("." + playerOneMark + "-winner-mark-container").removeClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
        $("." + cpuMark + "-winner-mark-container").addClass("hide");
    }

    else {
        cpuTurn();
    }
    });
    
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
    var numberOfFreeTiles = Math.floor(availableTiles.length);
    var randomNumber = Math.floor(Math.random() * numberOfFreeTiles);
    cpuChosenTile = availableTiles[randomNumber];
    console.log(cpuChosenTile);
    $("." + cpuMark + "-" + cpuChosenTile).removeClass("hide");
    cpuMoves.push(cpuChosenTile);
    console.log(availableTiles.indexOf(cpuChosenTile));
    availableTiles.splice(randomNumber,1);
    console.log("after cpu turn" + availableTiles);
    
    if (cpuMoves.indexOf("tile-1") !== -1 && cpuMoves.indexOf("tile-2") !== -1 && cpuMoves.indexOf("tile-3") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    if (cpuMoves.indexOf("tile-4") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-6") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    if (cpuMoves.indexOf("tile-7") !== -1 && cpuMoves.indexOf("tile-8") !== -1 && cpuMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    if (cpuMoves.indexOf("tile-1") !== -1 && cpuMoves.indexOf("tile-4") !== -1 && cpuMoves.indexOf("tile-7") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    if (cpuMoves.indexOf("tile-2") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-8") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    if (cpuMoves.indexOf("tile-3") !== -1 && cpuMoves.indexOf("tile-6") !== -1 && cpuMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    if (cpuMoves.indexOf("tile-1") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-9") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    if (cpuMoves.indexOf("tile-3") !== -1 && cpuMoves.indexOf("tile-5") !== -1 && cpuMoves.indexOf("tile-7") !== -1 ) {
        $(".winner-display-content-container").removeClass("hide");
        $("." + cpuMark + "-winner-mark-container").removeClass("hide");
        $("." + playerOneMark  + "-winner-mark-container").addClass("hide");
        $("." + playerTwoMark + "-winner-mark-container").addClass("hide");
    }

    else {
       playerOneTurn(); 
    }
};

