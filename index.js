var playerOneMark = [];
var playerTwoMark = [];

var playerOneMoves = [];
var playerTwoMoves = [];
var AvailableTiles = ["tile-1", "tile-2", "tile-3", "tile-4", "tile-5", "tile-6", "tile-7", "tile-8", "tile-9"];


// New Game Functions
$(".select-x").on("click", function(event) {
    $(".select-x").addClass("selected");
    $(".x-outline").addClass("hide");
    $(".x-outline-silver").removeClass("hide");
    playerOneMark = [];
    playerTwoMark = [];
    playerOneMark.push(this.id);
    playerTwoMark.push("o");
    console.log("Player one: " + playerOneMark);
    console.log("Player two: " + playerTwoMark);

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
    playerOneMark.push(this.id);
    playerTwoMark.push("x");
    console.log("Player one: " + playerOneMark);
    console.log("Player two: " + playerTwoMark);

    $(".select-x").removeClass("selected");
    $(".x-outline").removeClass("hide");
    $(".x-outline-silver").addClass("hide");
});

$(".vs-cpu-button").on("click", function() {
    if (playerOneMark != "") {
        $(".new-game-flex-container").addClass("hide");
    }

});

$(".vs-player-button").on("click", function() {
    if (playerOneMark != "") {
        $(".new-game-flex-container").addClass("hide");
    }
});

// Game Functions
$(".game-tile").hover(function (event) {
    var hoverMark = (playerOneMark + "-hover-" + this.id);
    $("." + hoverMark).removeClass("hide");
}, 
function () {
    var hoverMark = (playerOneMark + "-hover-" + this.id);
    $("." + hoverMark).addClass("hide");
});
