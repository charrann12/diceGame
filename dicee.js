// generating a random number so that we can get that particular dice value
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//extracting the dice image from the folders using the variable 
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

//similarly, doing the same thing for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// selecting the image elements
var image1 = document.querySelectorAll("img")[0];

// assigning them the link of the random dice image
image1.setAttribute("src", randomDiceImage);

// similarly for the second one
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


// title change as per the dice value

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 wins !!!"
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins !!"
}

else{
    document.querySelector("h1").innerHTML = " its a draw now !!"
}

