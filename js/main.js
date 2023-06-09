console.log("JS Loaded");

document.body.addEventListener("keydown", handleKeyDown);
document.body.addEventListener("keyup", handleKeyUp);

function handleKeyDown(event) {
    const key = event.key;
    console.log(key);
    if (key == 'a') {
        goLeft();
    } else if (key == 'd') {
        goRight();
    } else if (key == 'w') {
        gas()
    } else if (key == 'h') {
        handbrake()
    }

    // if (key == 'w') {
    //     forwardLeft()
    //     console.log("Forward Left")
    // }
}

function handleKeyUp(event) {
    const key = event.key;
    console.log(key);
    document.querySelector("img.auto").classList.remove("left");
    document.querySelector("img.auto").classList.remove("right");
    document.querySelector("img.auto").classList.remove("forward")
    // document.querySelector("img.auto").classList.remove("back")
    document.querySelector("img.auto").classList.add("auto")
}

let xPos = 0
function goLeft() {
    document.querySelector("img.auto").classList.add("left");
    document.querySelector("img.auto").style.paddingRight = xPos + "px";
    xPos++;
}

function goRight() {
    document.querySelector("img.auto").classList.add("right")
}

let yPos = -900;
function gas() {
    console.log(234)
    document.querySelector("div.my-way").style.top = yPos + "vh";
    yPos++;
    // document.querySelector("img.auto").classList.add("forward")
}

// function goBackwards() {
//     document.querySelector("img.auto").classList.add("back")
// }

const bugatti = document.querySelector(".bugatti");
const mercedes = document.querySelector(".amg");
const lambo = document.querySelector(".lambo");
const porsche = document.querySelector(".porsche");
const bmw = document.querySelector(".bmw");
const audi = document.querySelector(".audi");
const volkswagen = document.querySelector(".vw");
const chooseBtn = document.querySelector(".chooseButton");
const resetCar = document.querySelector(".resetBtn");

bugatti.addEventListener('click', chooseBugatti)
mercedes.addEventListener('click', chooseMercedes)
lambo.addEventListener('click', chooseLambo)
porsche.addEventListener('click', choosePorsche)
bmw.addEventListener('click', chooseBmw)
audi.addEventListener('click', chooseAudi)
volkswagen.addEventListener('click', chooseVolkswagen)
chooseBtn.addEventListener('click', selectCar)
resetCar.addEventListener('click', resetBtn)

chooseBtn.disabled = false;
bugatti.disabled = true;
mercedes.disabled = true;
lambo.disabled = true;
porsche.disabled = true;
bmw.disabled = true;
audi.disabled = true;
volkswagen.disabled = true;
resetCar.disabled = true;

function resetBtn() {
    // let img = document.querySelector(".auto");
    // img.src = 'img/arrow.png'
    console.log("Car Reset")
    console.clear
    location.reload()
    document.querySelector(".bugatti").classList.remove("select")
    document.querySelector(".amg").classList.remove("select")
    document.querySelector(".lambo").classList.remove("select")
    document.querySelector(".porsche").classList.remove("select")
    document.querySelector(".bmw").classList.remove("select")
    document.querySelector(".audi").classList.remove("select")
    document.querySelector(".vw").classList.remove("select")
}

function selectCar() {
    document.querySelector(".bugatti").classList.add("select")
    document.querySelector(".lambo").classList.add("select")
    document.querySelector(".amg").classList.add("select")
    document.querySelector(".porsche").classList.add("select")
    document.querySelector(".bmw").classList.add("select")
    document.querySelector(".audi").classList.add("select")
    document.querySelector(".vw").classList.add("select")
    bugatti.disabled = false;
    mercedes.disabled = false;
    lambo.disabled = false;
    porsche.disabled = false;
    bmw.disabled = false;
    audi.disabled = false;
    volkswagen.disabled = false;
}

function chooseBugatti() {
    console.log("U chose the Bugatti")
    let img = document.querySelector(".auto");
    img.src = 'img/bugatti.png'
    document.querySelector(".auto").classList.add("buga")  
    document.querySelector(".bugatti").classList.remove("select")  
    chooseBtn.disabled = true;
    bugatti.disabled = true;
    mercedes.disabled = true;
    lambo.disabled = true;
    porsche.disabled = true;
    bmw.disabled = true;
    audi.disabled = true;
    volkswagen.disabled = true;
    resetCar.disabled = false;
}

function chooseMercedes() {
    console.log("U chose the Mercedes")
    let img = document.querySelector(".auto");
    img.src = 'img/amg.png'
    document.querySelector(".auto").classList.add("merrie")
    document.querySelector(".amg").classList.remove("select")  
    chooseBtn.disabled = true;
    bugatti.disabled = true;
    mercedes.disabled = true;
    lambo.disabled = true;
    porsche.disabled = true;
    bmw.disabled = true;
    audi.disabled = true;
    volkswagen.disabled = true;
    resetCar.disabled = false;
}

function chooseLambo() {
    console.log("U chose the Lambo")
    let img = document.querySelector(".auto");
    img.src = 'img/lambo.png'
    document.querySelector(".auto").classList.add("lam")
    document.querySelector(".lambo").classList.remove("select")  
    chooseBtn.disabled = true;
    bugatti.disabled = true;
    mercedes.disabled = true;
    lambo.disabled = true;
    porsche.disabled = true;
    bmw.disabled = true;
    audi.disabled = true;
    volkswagen.disabled = true;
    resetCar.disabled = false;
}

function choosePorsche() {
    console.log("U chose the Porsche")
    let img = document.querySelector(".auto");
    img.src = 'img/porsche.png'
    document.querySelector("img.auto").classList.add("por")
    document.querySelector(".porsche").classList.remove("select")  
    chooseBtn.disabled = true;
    bugatti.disabled = true;
    mercedes.disabled = true;
    lambo.disabled = true;
    porsche.disabled = true;
    bmw.disabled = true;
    audi.disabled = true;
    volkswagen.disabled = true;
    resetCar.disabled = false;
}

function chooseBmw() {
    console.log("U chose the BMW")
    let img = document.querySelector(".auto");
    img.src = 'img/bmw.png'
    document.querySelector(".auto").classList.add("bmww")
    document.querySelector(".bmw").classList.remove("select")  
    chooseBtn.disabled = true;
    bugatti.disabled = true;
    mercedes.disabled = true;
    lambo.disabled = true;
    porsche.disabled = true;
    bmw.disabled = true;
    audi.disabled = true;
    volkswagen.disabled = true;
    resetCar.disabled = false;
}

function chooseAudi() {
    console.log("U chose the Audi")
    let img = document.querySelector(".auto");
    img.src = 'img/audi.png'
    document.querySelector(".auto").classList.add("aud")
    document.querySelector(".audi").classList.remove("select")  
    chooseBtn.disabled = true;
    bugatti.disabled = true;
    mercedes.disabled = true;
    lambo.disabled = true;
    porsche.disabled = true;
    bmw.disabled = true;
    audi.disabled = true;
    volkswagen.disabled = true;
    resetCar.disabled = false;
}

function chooseVolkswagen() {
    console.log("U chose the Volkswagen")
    let img = document.querySelector(".auto");
    img.src = 'img/volkswagen.png'
    document.querySelector(".auto").classList.add("volks")
    document.querySelector(".vw").classList.remove("select")  
    chooseBtn.disabled = true;
    bugatti.disabled = true;
    mercedes.disabled = true;
    lambo.disabled = true;
    porsche.disabled = true;
    bmw.disabled = true;
    audi.disabled = true;
    volkswagen.disabled = true;
    resetCar.disabled = false;
}