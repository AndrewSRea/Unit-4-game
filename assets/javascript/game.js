var gameRandomNum;
var userWins = 0;
var userLoss = 0;
var totalScore = 0;

var resetGame = function() {

    $(".crystals").empty();

    var image = "https://i.pinimg.com/originals/bd/4e/0c/bd4e0c1db2341cb53a73f001abbbcbe5.jpg"

    gameRandomNum = Math.floor(Math.random() * 69) + 30;

    $("#randomNum").html('Random Number: ' + gameRandomNum);

    for (var i = 0; i < 4; i++) {
        
        var randomNum = Math.floor(Math.random() * 11) +1;

        var crystal = $("<img>");
            crystal.attr({
                "class": 'crystal',
                "data-random": randomNum,
                "src": image,
                "height": '198px',
                "width": '198px',
            });
            console.log(image)

        $(".crystals").append(crystal);
        
    }

    $("#total").html("Total Score: " + totalScore);

}

resetGame();

newFunction()
    function newFunction() {
        $(document).on('click', ".crystal", function () {
            var num = parseInt($(this).attr('data-random'));

            totalScore += num;

            $("#total").html("Total Score: " + totalScore);

            console.log(totalScore);

            if(totalScore > gameRandomNum) {
                userLoss++;

                $("#loss").html("Losses: " + userLoss);

                totalScore = 0;

                resetGame();
            }
            else if(totalScore === gameRandomNum){
                userWins++;

                $("#wins").html("Wins: " + userWins);

                totalScore = 0;

                resetGame();
            } 

        });
    }
