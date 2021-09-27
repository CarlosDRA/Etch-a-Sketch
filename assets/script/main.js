"use strict"

const canvas = document.querySelector(".container");
const clearBtn = document.getElementById("clear");
const color = document.getElementById("color-picker");
const canvasGrid = document.getElementById("grid-selector");
const eraserBtn = document.getElementById("eraser");
const rainbowBtn = document.getElementById("rainbow");
const shadeBtn = document.getElementById("shade");
const lightBth = document.getElementById("light");

function grid(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "cell";
        cell.style.width = `${canvas.clientWidth/cols}px`;
        cell.style.height = `${canvas.clientHeight/rows}px`;
    }
}


grid(16,16);

const cell = document.querySelectorAll(".cell");

cell.forEach(item => item.addEventListener("mouseover", paint))

function paint(e){

    e.target.style["background-color"] = color.value;
}

function colorReset(e){
    e.target.style["background-color"] = "#fff";
}

function toggle(e){
    if(e.target.value == "off"){
        e.target.value = "on";
        e.target.classList.add("on")
    } else if(e.target.value == "on"){
        e.target.value = "off"
        e.target.classList.remove("on")
    }
}

clearBtn.addEventListener("click", () =>{
    cell.forEach(item => item.style["background-color"] = "#fff");
})

eraserBtn.addEventListener("click", toggle);
