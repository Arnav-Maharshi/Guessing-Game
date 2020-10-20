

player1Name = localStorage.getItem("player1Name");
var player2Name = localStorage.getItem("player2Name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("playerQuestion").innerHTML = "Question turn :- " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer turn :- " + player2Name;
document.getElementById("player1Name").innerHTML =  player1Name + ": " ;
document.getElementById("player2Name").innerHTML =  player2Name + ": " ;
document.getElementById("player1Score").innerHTML =  player1_score ;
document.getElementById("player2Score").innerHTML =  player2_score ;

function send(){
    var get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);
    char_1 = word.charAt(1);
    lengthBy2 = Math.floor(word.length/2);
    char_2 = word.charAt(lengthBy2);
    lengthMinus1 = word.length -1;
    char_3 = word.charAt(lengthMinus1);
    remove_1 = word.replace(char_1, "_");
    remove_2 = remove_1.replace(char_2, "_");
    remove_3 = remove_2.replace(char_3, "_");
    questionWord = "<h4 id=\"word_display\" > Q. " + remove_3 + "</h4>";
    answerWord = "<br> Answer: <input type=\"text\" id='inputAnswer'> " ;
    Checkbutton = "<br> <br> <button onclick='Check()' class = 'btn btn-info'>Check</button>";
    row = questionWord+answerWord+Checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var questionTurn = "player1";
var answerTurn = "player2";

function Check(){
    get_Answer = document.getElementById("inputAnswer").value;
    if (get_Answer.toLowerCase() == word){
        if (answerTurn == "player1"){
            player1_score++;
            document.getElementById("player1Score").innerHTML = player1_score;
        }
        else{
            player2_score++;
            document.getElementById("player2Score").innerHTML = player2_score;
        }
    }
    
   document.getElementById("output").innerHTML = "";
    if(questionTurn == "player1"){
        document.getElementById("playerQuestion").innerHTML = "Question turn :- " + player2Name;
        document.getElementById("playerAnswer").innerHTML = "Answer turn :- " + player1Name;
        questionTurn = "player2";
        answerTurn = "player1";
    }
    else{
        document.getElementById("playerQuestion").innerHTML = "Question turn :- " + player1Name;
        document.getElementById("playerAnswer").innerHTML = "Answer turn :- " + player2Name;
        questionTurn = "player1";
        answerTurn = "player2";
    }
}




