//rgtryhyy
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//If we clicked on the start/reset
//gtrhtrjhyj
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
        location.reload(); //reload page
    }else{//if we are not playing
        //change mode playing
        playing = true;
        score = 0;//set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        //show contdown box
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        //hide game over box
        hide("gameOver");
        //change buttonm to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        //start countdown
        startCountdown();
        //generate a new Q&A
        generateQA();
    }
}
//clicking on an answer box
for(i=1; i<5; i++){
    document.getElementById("box" +i).onclick = function(){
        //check if we are playing
        if(playing == true){//yes
            if(this.innerHTML == correctAnswer){
                //correct answer
                // increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct")
                },1000);
                //generate new Q&A
                generateQA();
            }else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong")
                },1000);
            }
        }
    }
}
    
   //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show contdown box
        //reduce time by 1sec in loops
            //timeleft?
                //Yes->continue
                //no->gameover
        //change buttonm to reset
        //generate new Q&A


//if we click on answer box
    //if we are playing
        //correct
            //yes
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again for 1sec

//functions
//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1; document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){//game over
            stopCounterdown();
            show("gameOver");
            document.getElementById('gameOver').innerHTML = "<p>Game Over!</p><p>Your Score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000);//two parameters function,duration 100milisecond   
}
//stop counter
function stopCountdown(){
    clearInterval(action);
}
//hide an element
function hide(Id){
    document.getElementById(Id).style.display="none";
}
//show an element
function show(Id){
    document.getElementById(Id).style.display="block";
}
//generate questions and multiple answers
function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill ione box with the correct answer]
    // fill other boxes with wrong answer
    var answers = [correctAnswer];
    for(i=1; i<5; i++){
        if(i != correctPosition) {//!== means not equal value not equal type; === means equal value and equal type
            var wrongAnswer;
            do{
                 wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random())); //wrong answer
            }while(answers.indexOf(wrongAnswer) > -1) 
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}