"use strict"

const canvas = document.querySelector(".container");

//buttons
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const rainbowBtn = document.getElementById("rainbow");
const shadeBtn = document.getElementById("shade");
const lightBtn = document.getElementById("light");

//selectors
const canvasGrid = document.getElementById("grid-selector");
const color = document.getElementById("color-picker");

eraserBtn.addEventListener("click", toggle);
rainbowBtn.addEventListener("click", toggle);
shadeBtn.addEventListener("click", toggle);
lightBtn.addEventListener("click", toggle);


grid(16,16);
const cell = document.querySelectorAll(".cell");
cell.forEach(item => item.addEventListener("mouseover", paint))

clearBtn.addEventListener("click", () =>{
    cell.forEach(item => item.style["background-color"] = "#fff");
})



function grid(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "cell";
        cell.style.width = `${canvas.clientWidth/cols}px`;
        cell.style.height = `${canvas.clientHeight/rows}px`;
    }
}

function paint(e){
    e.target.style["background-color"] = color.value;

    if(eraserBtn.value === "on"){
        e.target.style["background-color"] = "#fff";
    }

    if(rainbowBtn.value === "on"){
        e.target.style["background-color"] = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }

    if(shadeBtn.value === "on"){
        e.target.style["background-color"] = "hsl(180, 100%, 10%)";
    }

    if(lightBtn.value === "on"){
        e.target.style["background-color"] = "hsl(180, 100%, 80%)"
    }
}

function clearCell(e){
    e.target.style["background-color"] = "#fff";
}

function toggle(e){
    if(e.target.id === "eraser"){
        if(e.target.value == "off"){
            e.target.value = "on";
            e.target.classList.add("on");
            
            rainbowBtn.value = "off";
            shadeBtn.value = "off";
            lightBtn.value = "off";

            rainbowBtn.classList.remove("on");
            shadeBtn.classList.remove("on");
            lightBtn.classList.remove("on");

        } else if(e.target.value == "on"){
            e.target.value = "off";
            e.target.classList.remove("on");
        }

    }

    if(e.target.id === "rainbow"){
        if(e.target.value == "off"){
            e.target.value = "on";
            e.target.classList.add("on");
            
            eraserBtn.value = "off";
            shadeBtn.value = "off";
            lightBtn.value = "off";
            
            eraserBtn.classList.remove("on");
            shadeBtn.classList.remove("on");
            lightBtn.classList.remove("on");

        } else if(e.target.value == "on"){
            e.target.value = "off";
            e.target.classList.remove("on");
        }

    }

    if(e.target.id === "shade"){
        if(e.target.value == "off"){
            e.target.value = "on";
            e.target.classList.add("on");

            eraserBtn.value = "off";
            rainbowBtn.value = "off";
            lightBtn.value = "off";

            eraserBtn.classList.remove("on");
            rainbowBtn.classList.remove("on");
            lightBtn.classList.remove("on");

        } else if(e.target.value == "on"){
            e.target.value = "off";
            e.target.classList.remove("on");
        }
    }

    if(e.target.id === "light"){
        if(e.target.value == "off"){
            e.target.value = "on";
            e.target.classList.add("on");

            eraserBtn.value = "off";
            rainbowBtn.value = "off";
            shadeBtn.value = "off";

            eraserBtn.classList.remove("on");
            rainbowBtn.classList.remove("on");
            shadeBtn.classList.remove("on");

        } else if(e.target.value == "on"){
            e.target.value = "off";
            e.target.classList.remove("on");
        }
    } 
    
}