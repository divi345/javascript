//selecting container
const ContainerEl = document.querySelector(".container");


//create 30 div class color container 
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    ContainerEl.appendChild(colorContainerEl);
    
}

// selecting all color container
const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

// creating random color

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const  randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum+1);
       
    }
    return colorCode;
}