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

function clearCell(e){
    e.target.style["background-color"] = "#fff";
}

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