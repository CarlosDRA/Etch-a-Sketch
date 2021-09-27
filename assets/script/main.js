"use strict"

const canvas = document.querySelector(".container");
const width = document.querySelector(".container").clientWidth;
const height = document.querySelector(".container").clientHeight;
const clearBtn = document.getElementById("clear");
const color = document.getElementById("color-picker");
const canvasSize = document.getElementById("grid-selector");

function grid(rows, cols){
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        canvas.appendChild(cell).className = "cell";
        cell.style.width = `${width/cols}px`;
        cell.style.height = `${height/rows}px`;
    }
}

grid(16,16);

const cell = document.querySelectorAll(".cell");

cell.forEach(item => item.addEventListener("mouseover", colorOver))

function colorOver(e){
    e.target.style["background-color"] = "black";
    e.target.style.color = "black";
}

function colorReset(e){
    e.target.style["background-color"] = "#fff";
}

clearBtn.addEventListener("click", () =>{
    cell.forEach(item => item.style["background-color"] = "#fff");
})
