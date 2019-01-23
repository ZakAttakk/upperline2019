 document.addEventListener("DOMContentLoaded", start);


function start(){

    // Beginning of MULTIPLES section

    var multiplesInput = document.getElementById("multiplesInput");
    var multiplesOutput = document.getElementById("multiplesOutput");
    var submitButton = document.getElementById("submitButton");


    submitButton.addEventListener("click", checkMultiples);


    function checkMultiples(){
        var input = parseInt(multiplesInput.value); //had to look this up even though I've used it many times before
        console.log("");
        console.log("Input: " + input);

        var notNumber = isNaN(input); //Had to look this up, never used it before
        console.log("notNumber: " + notNumber);

        if (notNumber === true){
            multiplesOutput.innerHTML = "C'mon human. That's not a number!";
        }

        var inputDividedByTwo = input/2;
        var inputDividedByThree = input/3;

        var isMultipleOfTwo = Number.isInteger(inputDividedByTwo); // had to look this up, never used it before
        var isMultipleOfThree = Number.isInteger(inputDividedByThree); // had to look this up, never used it before

        console.log("Input divided by 2: " + inputDividedByTwo);
        console.log("Input divided by 3: " + inputDividedByThree);
        console.log("Is multiple 2: " + isMultipleOfTwo);
        console.log("Is multiple 3: " + isMultipleOfThree);

        if (isMultipleOfTwo === true && isMultipleOfThree === true && notNumber === false){
            multiplesOutput.innerHTML = "That's a multiple of two AND three!";
        }
        else if (isMultipleOfTwo === true && notNumber === false){
            multiplesOutput.innerHTML = "That's a multiple of TWO!";
        }
        else if (isMultipleOfThree === true && notNumber === false){
            multiplesOutput.innerHTML = "That's a multiple of THREE!";
        }
        else if (notNumber === false){
            multiplesOutput.innerHTML = "That's not a multiple of two or three. SAD!";
        }

    }

    // End of MULTIPLES section
    // Beginning of TIC TAC TOE Section

    var TTTboxes = document.querySelectorAll(".TTTbox"); // This might not be something I would use with students
    //console.log(TTTboxes);

    function makeBoxesClickable(){
        for (var i = 0; i < TTTboxes.length; i++){
            //console.log(TTTboxes[i]);
            TTTboxes[i].addEventListener("click", makeX);
        }
    }
    makeBoxesClickable();

    var turnNumber = 0; // had to add this late in the process - makes game run smoother
    var gameOver = false; // had to add this late in the process - makes game run smoother
    function makeX(){
        if (gameOver === false){
            var thisBox = this; // Very important concept!
            thisBox.innerHTML = "X";
            thisBox.removeEventListener("click", makeX);
            turnNumber += 1;  //ORDER IMPORTANT HERE
            console.log("Turn just finished: " + turnNumber);
            console.log("");
            checkWinner(); //ORDER IMPORTANT HERE
            pickRandomBox(); //ORDER IMPORTANT HERE
        }
    }

    function pickRandomBox(){
        var randomNumber = Math.floor(Math.random() * 9); // Had to look this up even though I've used it many times before
        console.log("Random number: " + randomNumber);
        if (gameOver === false && turnNumber >= 9){
            gameOver = true;
            alert("Game Over.");
        }
        if (gameOver === false && turnNumber < 9){
            if (TTTboxes[randomNumber].innerHTML === "X" || TTTboxes[randomNumber].innerHTML === "O"){
                pickRandomBox(); //recursive function
            }
            else{
                TTTboxes[randomNumber].innerHTML = "O";
                TTTboxes[randomNumber].removeEventListener("click", makeX);
                turnNumber += 1;
                checkWinner();
                console.log("Turn just finished: " + turnNumber);
                console.log("");
            }
        }
    }

    var winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    function checkWinner(){
      console.log("Checking for winner...");
      for (var i = 0; i < winConditions.length; i++){
        var first = winConditions[i][0];
        var second = winConditions[i][1];
        var third = winConditions[i][2];
        if (TTTboxes[first].innerHTML === "O" && TTTboxes[second].innerHTML === "O" && TTTboxes[third].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[first].innerHTML === "X" && TTTboxes[second].innerHTML === "X" && TTTboxes[third].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
      }
    }

    function checkWinnerOld(){
        // COMPUTER WIN CONDITIONS
        if (TTTboxes[0].innerHTML === "O" && TTTboxes[1].innerHTML === "O" && TTTboxes[2].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[3].innerHTML === "O" && TTTboxes[4].innerHTML === "O" && TTTboxes[5].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[6].innerHTML === "O" && TTTboxes[7].innerHTML === "O" && TTTboxes[8].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[0].innerHTML === "O" && TTTboxes[3].innerHTML === "O" && TTTboxes[6].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[1].innerHTML === "O" && TTTboxes[4].innerHTML === "O" && TTTboxes[7].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[2].innerHTML === "O" && TTTboxes[5].innerHTML === "O" && TTTboxes[8].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[0].innerHTML === "O" && TTTboxes[4].innerHTML === "O" && TTTboxes[8].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }
        if (TTTboxes[2].innerHTML === "O" && TTTboxes[4].innerHTML === "O" && TTTboxes[6].innerHTML === "O" && gameOver === false){
            gameOver = true;
            alert("The computer wins!");
        }

        // HUMAN WIN CONDITIONS

        if (TTTboxes[0].innerHTML === "X" && TTTboxes[1].innerHTML === "X" && TTTboxes[2].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
        if (TTTboxes[3].innerHTML === "X" && TTTboxes[4].innerHTML === "X" && TTTboxes[5].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
        if (TTTboxes[6].innerHTML === "X" && TTTboxes[7].innerHTML === "X" && TTTboxes[8].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
        if (TTTboxes[0].innerHTML === "X" && TTTboxes[3].innerHTML === "X" && TTTboxes[6].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
        if (TTTboxes[1].innerHTML === "X" && TTTboxes[4].innerHTML === "X" && TTTboxes[7].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
        if (TTTboxes[2].innerHTML === "X" && TTTboxes[5].innerHTML === "X" && TTTboxes[8].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
        if (TTTboxes[0].innerHTML === "X" && TTTboxes[4].innerHTML === "X" && TTTboxes[8].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }
        if (TTTboxes[2].innerHTML === "X" && TTTboxes[4].innerHTML === "X" && TTTboxes[6].innerHTML === "X" && gameOver === false){
            gameOver = true;
            alert("You win!");
        }


    }
    // End of TIC TAC TOE section

}

// Start of Adventure Game section

var map = `
*--------
X--------
XXXXX----
----X----
XXXXX----
X-----XXX
XXXXXXX-#`


function startGame(){
  console.log("Below is a map of the labyrinth.  You are Princess Asterisk.  You must rescue Prince Hashtag!  The Xs mark your path.");
  console.log(map);
  console.log("Type 'map' at any time to see the map again. Type left(), right(), up(), or down() to move.");
}
//startGame();

function down(){
  var mapArray = map.split('')
  var moveSuccessful = false;
  for (var i = 0; i < mapArray.length; i++){
    //console.log(mapArray[i]);
    if (mapArray[i] === "*"){
      var currentLocation = i;
      var destination = i + 10;
      //console.log(mapArray[destination]);
      if (mapArray[destination] !== "X"){
        console.log("You can't go there");
        if (mapArray[destination] === "#"){
          alert("You win!");
        }
      } else{
        //console.log("You can go there");
        mapArray[currentLocation] = "X";
        mapArray[destination] = "*";
        moveSuccessful = true;
        break;
      }
    }
  }
  if (moveSuccessful){
    map = mapArray.join("");
    console.log(map);
  }
}

function up(){
  var mapArray = map.split('')
  var moveSuccessful = false;
  for (var i = 0; i < mapArray.length; i++){
    //console.log(mapArray[i]);
    if (mapArray[i] === "*"){
      var currentLocation = i;
      var destination = i - 10;
      //console.log(mapArray[destination]);
      if (mapArray[destination] !== "X"){
        console.log("You can't go there");
      } else{
        //console.log("You can go there");
        mapArray[currentLocation] = "X";
        mapArray[destination] = "*";
        moveSuccessful = true;
        break;
      }
    }
  }
  if (moveSuccessful){
    map = mapArray.join("");
    console.log(map);
  }
}

function left(){
  var mapArray = map.split('')
  var moveSuccessful = false;
  for (var i = 0; i < mapArray.length; i++){
    //console.log(mapArray[i]);
    if (mapArray[i] === "*"){
      var currentLocation = i;
      var destination = i - 1;
      //console.log(mapArray[destination]);
      if (mapArray[destination] !== "X"){
        console.log("You can't go there");
      } else{
        //console.log("You can go there");
        mapArray[currentLocation] = "X";
        mapArray[destination] = "*";
        moveSuccessful = true;
        break;
      }
    }
  }
  if (moveSuccessful){
    map = mapArray.join("");
    console.log(map);
  }
}

function right(){
  var mapArray = map.split('')
  var moveSuccessful = false;
  for (var i = 0; i < mapArray.length; i++){
    //console.log(mapArray[i]);
    if (mapArray[i] === "*"){
      var currentLocation = i;
      var destination = i + 1;
      //console.log(mapArray[destination]);
      if (mapArray[destination] !== "X"){
        console.log("You can't go there");
      } else{
        //console.log("You can go there");
        mapArray[currentLocation] = "X";
        mapArray[destination] = "*";
        moveSuccessful = true;
        break;
      }
    }
  }
  if (moveSuccessful){
    map = mapArray.join("");
    console.log(map);
  }
}
