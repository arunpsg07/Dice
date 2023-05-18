// Generate a random number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// Output the random number
// console.log(randomNumber1);


// document.getElementById("img1")
document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice"+randomNumber2+".png");

document.getElementsByTagName("h1")[0].innerHTML="Hi"

if (randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins"

}

else if(randomNumber2>randomNumber1){
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins"

}

else{
    document.getElementsByTagName("h1")[0].innerHTML="Draw"

}