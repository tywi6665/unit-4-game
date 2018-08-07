$( document ).ready(function(){
//Start off with variables
//four random value crystals
var crystalArray = [ "crystal1", "crystal2", "crystal3", "crystal3" ];
    for ( i = 0; i < crystalArray.length; i++) {
        crystalArray[i] = Math.floor(Math.random() * 11 + 1 );
        console.log(crystalArray);
}

//score
var score = 0;
//wins
var wins = 0;
//losses
var losses = 0;
//generated random target number
var targetNum = Math.floor(Math.random()*101+19);
//append target number to the page
$(".target-number").text(targetNum);
console.log(targetNum);

//Game logic
//show wins, losses and current score on page
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(score);

function points () {
    //if current score is equal to the target number, then you win
    if ( score === targetNum ) {
        //alert player that they have won and
        alert( "You Won!!" );
        wins++;
        $("#wins").text(wins);
        //call reset functions
        reset();
    //if current score is greater than the target number, you lose
    } else if ( score > targetNum ) {
        //alert player they have lost
        alert( "You Lose" );
        losses++;
        $("#losses").text(losses);
         //call reset function
        reset();
    }
}
 
//create on click functions for each crystals
//grab the values of crystal that is clicked
//add the value to the current score and render that to the page
$(".crystalImage1").on("click", function(){
    score = score + crystalArray[0];
    $("#score").text(score);
    console.log(score);
    points() ;
});
$(".crystalImage2").on("click", function(){
    score = score + crystalArray[1];
    $("#score").text(score);
    points() ;
});
$(".crystalImage3").on("click", function(){
    score = score + crystalArray[2];
    $("#score").text(score);
    points() ;
});
$(".crystalImage4").on("click", function(){
    score = score + crystalArray[3];
    $("#score").text(score);
    points() ;
});
    
   
//reset function
function reset() {
    //generate a new random number
    targetNum = Math.floor(Math.random()*101+19);
        $(".target-number").text(targetNum);
        console.log(targetNum);
    //generate four new crystals values
    crystalArray = [ "crystal1", "crystal2", "crystal3", "crystal3" ];
        for ( i = 0; i < crystalArray.length; i++) {
        crystalArray[i] = Math.floor(Math.random() * 11 + 1 );
        console.log(crystalArray);
    //reset current score to 0
    score = 0;
    $("#score").text(score);
    }
};

});