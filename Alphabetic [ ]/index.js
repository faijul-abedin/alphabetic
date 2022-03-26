//Funtionality for Alphabetic [] website.
let rText = document.querySelector("#resultText")
let img = document.querySelector(".image")

//All buuton declaration start.
let aBtn = document.querySelector("#a")
let bBtn = document.querySelector("#b")
let cBtn = document.querySelector("#c")
let dBtn = document.querySelector("#d")
let eBtn = document.querySelector("#e")
let fBtn = document.querySelector("#f")
let gBtn = document.querySelector("#g")
let hBtn = document.querySelector("#h")
let iBtn = document.querySelector("#i")
let jBtn = document.querySelector("#j")
let kBtn = document.querySelector("#k")
let lBtn = document.querySelector("#l")
let mBtn = document.querySelector("#m")
let nBtn = document.querySelector("#n")
let oBtn = document.querySelector("#o")
let pBtn = document.querySelector("#p")
let qBtn = document.querySelector("#q")
let rBtn = document.querySelector("#r")
let sBtn = document.querySelector("#s")
let tBtn = document.querySelector("#t")
let uBtn = document.querySelector("#u")
let vBtn = document.querySelector("#v")
let wBtn = document.querySelector("#w")
let xBtn = document.querySelector("#x")
let yBtn = document.querySelector("#y")
let zBtn = document.querySelector("#z")
//All buuton declaration ends.

//Button functionality One by One starts.
aBtn.addEventListener("click", function(){
    resultText.innerText="A for Apple."
    textToSpeech(resultText.innerText)
    img.src= "images/apple.png"
});
bBtn.addEventListener("click", function(){
    resultText.innerText="B for Ball."
    textToSpeech(resultText.innerText)
    img.src= "images/ball.png"
});
cBtn.addEventListener("click", function(){
    resultText.innerText="C for Cat."
    textToSpeech(resultText.innerText)
    img.src= "images/cat.png"
});
dBtn.addEventListener("click", function(){
    resultText.innerText="D for Dog."
    textToSpeech(resultText.innerText)
    img.src= "images/dog.png"
});
eBtn.addEventListener("click", function(){
    resultText.innerText="E for Eagle."
    textToSpeech(resultText.innerText)
    img.src= "images/eagle.png"
});
fBtn.addEventListener("click", function(){
    resultText.innerText="F for Frog."
    textToSpeech(resultText.innerText)
    img.src= "images/frog.png"
});
gBtn.addEventListener("click", function(){
    resultText.innerText="G for Goat."
    textToSpeech(resultText.innerText)
    img.src= "images/goat.png"
});
hBtn.addEventListener("click", function(){
    resultText.innerText="H for Hat."
    textToSpeech(resultText.innerText)
    img.src= "images/hat.png"
});
iBtn.addEventListener("click", function(){
    resultText.innerText="I for Ink-pot."
    textToSpeech(resultText.innerText)
    img.src= "images/ink.png"
});
jBtn.addEventListener("click", function(){
    resultText.innerText="J for Jug."
    textToSpeech(resultText.innerText)
    img.src= "images/jug.png"
});
kBtn.addEventListener("click", function(){
    resultText.innerText="K for Kid."
    textToSpeech(resultText.innerText)
    img.src= "images/children.png"
});
lBtn.addEventListener("click", function(){
    resultText.innerText="L for Lion."
    textToSpeech(resultText.innerText)
    img.src= "images/lion.png"
});
mBtn.addEventListener("click", function(){
    resultText.innerText="M for Mouse."
    textToSpeech(resultText.innerText)
    img.src= "images/mouse.png"
});
nBtn.addEventListener("click", function(){
    resultText.innerText="N for Nose."
    textToSpeech(resultText.innerText)
    img.src= "images/nose.png"
});
oBtn.addEventListener("click", function(){
    resultText.innerText="O for Orange."
    textToSpeech(resultText.innerText)
    img.src= "images/orange.png"
});
pBtn.addEventListener("click", function(){
    resultText.innerText="P for Parrot."
    textToSpeech(resultText.innerText)
    img.src= "images/parrot.png"
});
qBtn.addEventListener("click", function(){
    resultText.innerText="Q for Queen."
    textToSpeech(resultText.innerText)
    img.src= "images/queen.png"
});
rBtn.addEventListener("click", function(){
    resultText.innerText="R for Rat."
    textToSpeech(resultText.innerText)
    img.src= "images/rat.png"
});
sBtn.addEventListener("click", function(){
    resultText.innerText="S for Sheep."
    textToSpeech(resultText.innerText)
    img.src= "images/sheep.png"
});
tBtn.addEventListener("click", function(){
    resultText.innerText="T for Table."
    textToSpeech(resultText.innerText)
    img.src= "images/table.png"
});
uBtn.addEventListener("click", function(){
    resultText.innerText="U for Umbrella."
    textToSpeech(resultText.innerText)
    img.src= "images/umbrella.png"
});
vBtn.addEventListener("click", function(){
    resultText.innerText="V for Violin."
    textToSpeech(resultText.innerText)
    img.src= "images/violin.png"
});
wBtn.addEventListener("click", function(){
    resultText.innerText="W for Wheel."
    textToSpeech(resultText.innerText)
    img.src= "images/wheel.png"
});
xBtn.addEventListener("click", function(){
    resultText.innerText="X for X-ray."
    textToSpeech(resultText.innerText)
    img.src= "images/x-ray.png"
});
yBtn.addEventListener("click", function(){
    resultText.innerText="Y for Yo-yo."
    textToSpeech(resultText.innerText)
    img.src= "images/yoyo.png"
});
zBtn.addEventListener("click", function(){
    resultText.innerText="Z for Zebra."
        textToSpeech(resultText.innerText)
        img.src= "images/zebra.png"
//Button functionality One by One end.

//This function is used for text to speech.
});
function textToSpeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance);

}

//JavaScript Programs end here!