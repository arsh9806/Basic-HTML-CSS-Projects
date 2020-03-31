var colors = generateRandomColors(6);

var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var number = document.querySelector(".numbers");
var message = document.querySelector("#message");
var jumbotron = document.querySelector(".jumbotron");
var newColor = document.querySelector("#newColor");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
number.innerHTML = pickedColor;
newColor.addEventListener("click",Six_Colors);
hardButton.classList.add("selected");
console.log("Outside!");
function showHardTask(){
    newColor.addEventListener("click",Six_Colors);
    newColor.removeEventListener("click",Three_Colors);
    Six_Colors();
    console.log("added event listener to new color Six colors");
}
function showEasyTask(){
    newColor.addEventListener("click",Three_Colors);
    newColor.removeEventListener("click",Six_Colors);
    Three_Colors();
    console.log("added event listener to new color Three colors");

}
//setting up newColour button to refresh the game

//function to generate and choose from 3 colors
function Three_Colors(){
    console.log("inside three");
    colors = generateRandomColors(3);
    newColor.innerHTML = "New Colour";
    message.textContent = "";

    pickedColor = pickColor();
    number.innerHTML = pickedColor;
    for(var i=0;i<square.length - 3;i++){
        square[i].style.background = colors[i];
        square[i+3].style.display = "none";
    }
    jumbotron.style.background = "rgb(54, 133, 236)";
}
//function to generate and choose from 6 colours
function Six_Colors(){
    console.log("inside six");
    colors = generateRandomColors(6);
    newColor.innerHTML = "New Colour";
    pickedColor = pickColor();
    message.textContent = "";
    number.innerHTML = pickedColor;
    console.log(square.length);
    console.log(colors.length);

    for(var i=0;i<square.length;i++){
            square[i].style.display = "block";
            square[i].style.background = colors[i];
    }
    jumbotron.style.background = "rgb(54, 133, 236)";
}



//to check if selected rgb matched with rgb in jumbotron
function checkAndChangeColor(){
    if(pickedColor.toLowerCase() != this.style.backgroundColor){
        // this.classList.toggle("fade");
        this.style.background = "#232323";
        message.textContent = "Try Again!";
        message.style.color = "black";
    }
    else{
        for(var i=0;i<square.length;i++){
            square[i].style.background = pickedColor;
        } 
        jumbotron.style.background = pickedColor;
        message.textContent = "Voila! it's Correct!";
        message.style.color = "black";

        newColor.innerHTML = "Play Again?";
    }
}

//changing colour of squares and adding an event listener to all of 'em
for(var i=0;i<square.length;i++){
    console.log("Adding event listeenr to all blocks");
    square[i].style.background = colors[i];
    square[i].addEventListener("click",checkAndChangeColor);
}
//generating a colour to guess
function pickColor(){
    console.log("inside pick color")
    return colors[Math.floor(Math.random()*colors.length)];
}

//generating options(colours)
function generateRandomColors(num){
    console.log("generating random colors" + num);
    var temp = [];
    for(var i=0;i<num;i++){
        temp.push(`RGB(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
    }
    return temp;
}
//to change colour of hard and easy button
hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    console.log("inside hardbutton event listener");
    showHardTask();
})
easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    console.log("inside easybutton event listener");

    showEasyTask();
})