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

// Game Functions
// $(".game-tile").hover(function (event) {
//     var hoverMark = (playerOneMark + "-hover-" + this.id);
//     if(availableTiles.indexOf(this.id) !== -1) {
//         $("." + hoverMark).removeClass("hide"); 
//     };
    
// }, 
// function () {
//     var hoverMark = (playerOneMark + "-hover-" + this.id);
//     $("." + hoverMark).addClass("hide");
    
// });

function playerOneTurn() {
    $(".game-tile").on("click", function(event) {
        console.log(this.id);
        console.log(playerOneMark[0]);
        $("." + playerOneMark +"-" + this.id).removeClass("hide");
        playerOneMoves.push(this.id); 
        availableTiles.splice(availableTiles.indexOf(this.id),1);
        var hoverMark = (playerOneMark + "-hover-" + this.id);
        $("." + hoverMark).addClass("hide");
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
    var numberOfFreeTiles = Math.floor(availableTiles.length)-1;
    var randomNumber = Math.floor(Math.random() * numberOfFreeTiles);
    cpuChosenTile = ( "-tile-" + randomNumber);
    $("." + cpuMark + cpuChosenTile).removeClass("hide");
    cpuMoves.push(cpuChosenTile);
    availableTiles.splice(availableTiles.indexOf(cpuChosenTile),1);
    console.log(availableTiles);



};