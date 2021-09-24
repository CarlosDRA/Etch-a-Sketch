"use strict"

const canvas = document.querySelector(".container");
const width = document.querySelector(".container").clientWidth;
const height = document.querySelector(".container").clientHeight;

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
