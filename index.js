var randomNumber1= Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomNumber1+".png";
var randomSrc="images/"+randomimage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomSrc);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomNumber2+".png";
var randomSrc2="images/"+randomimage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins😉";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins😎";
}
else{
    document.querySelector("h1").innerHTML="Draw!😎";
}