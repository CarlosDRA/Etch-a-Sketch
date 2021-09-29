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
let gridSize = 16;
const gridText = document.getElementById("canvas-grid");
const color = document.getElementById("color-picker");


eraserBtn.addEventListener("click", toggle);
rainbowBtn.addEventListener("click", toggle);
shadeBtn.addEventListener("click", toggle);
lightBtn.addEventListener("click", toggle);


grid();


canvasGrid.addEventListener("input", e =>{
    gridText.innerText = `${e.target.value}x${e.target.value}`;
    gridSize = parseInt(e.target.value);
    changeGrid();
})

function changeGrid(){
    clearGrid();
    grid();
}

const cell = document.querySelectorAll(".cell");

function clearGrid(){
    canvas.innerHTML = "";
} 

function grid(){
    for(let i = 0; i < (gridSize * gridSize); i++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", paint);
        canvas.appendChild(cell).className = "cell";
        cell.style.width = `${canvas.clientWidth/gridSize}px`;
        cell.style.height = `${canvas.clientHeight/gridSize}px`;
        cell.style.backgroundColor = "#fff";
    }
}

function paint(e){
    
    if(eraserBtn.value == "off" && rainbowBtn.value == "off" 
    && shadeBtn.value == "off" && lightBtn.value == "off"){
        e.target.style["background-color"] = color.value;
    }
    
    
    if(eraserBtn.value === "on"){
        e.target.style["background-color"] = "#fff";
    }
    
    if(rainbowBtn.value === "on"){
        e.target.style["background-color"] = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }
    
    if(shadeBtn.value === "on"){
        shading(e);
    }
    
    if(lightBtn.value === "on"){
        lighting(e);
    }
}

clearBtn.addEventListener("click", () =>{
    let squares = document.querySelectorAll(".cell")
    squares.forEach(item => item.style["background-color"] = "#fff");
})


function shading(e){
    let rgb = getRGB(e.target.style.backgroundColor);
    let color = RGBtoHSL(rgb[0], rgb[1], rgb[2])
    let colorArr = HSLtoArray(color)
    let newColor = `hsl(${colorArr[0]},${colorArr[1]},${parseFloat(colorArr[2]) - 5}%)`;
    e.target.style["background-color"] = newColor;
}

function lighting(e){
    let rgb = getRGB(e.target.style.backgroundColor);
    let color = RGBtoHSL(rgb[0], rgb[1], rgb[2])
    let colorArr = HSLtoArray(color)
    let newColor = `hsl(${colorArr[0]},${colorArr[1]},${parseFloat(colorArr[2]) + 5}%)`;
    e.target.style["background-color"] = newColor;
}

function HSLtoArray(color){
    let value = color.slice(4).replace(")","").split(",");
    return value;
}

function getRGB(rgb){
    let value = rgb.slice(4).replace(")","").replaceAll(" ","").split(",")
    return value
}

function RGBtoHSL(r, g, b){
    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r,g,b),
    cmax = Math.max(r,g,b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

    if (delta == 0){
        h = 0;
    } else if (cmax == r){
        h = ((g - b) / delta) % 6;
    } else if (cmax == g){
        h = (b - r) / delta + 2;
    } else{
        h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);
  
    if (h < 0){
        h += 360;
    }

    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + s + "%," + l + "%)";
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