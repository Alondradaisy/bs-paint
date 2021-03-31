
 //* Here we add the squares to the canvas dynamically.
 //* You can mostly leave this section alone!
 //* But if you want to change how wide the canvas is,
 //* there are just two steps:
 //* 
 //* 1. Change the `gridWidth` value below.
 //* 2. Change the `grid-template-rows` and
 //* `grid-template-columns` to match.
 //*
 //* To make the second one happen, the number to change
 //* is the first argument to `repeat`, currently set at 10.
 //*/


//const gridWidth = 10;
//let count = 0;
//while (count < gridWidth * gridWidth) {
  //const canvas = document.querySelector('.canvas');
  //const div = document.createElement('div');
  //div.className = 'square color-5';
  //canvas.appendChild(div);
  //count++;
//}

let mouseMvmt = false;

function paintColor(element) {
  return element.classList[1]; // the color at index 1
}

function clickedColor (event) {
  const color = event.target; //triggers the event passed through clickedColor
  const brush = document.querySelector('.current-brush');
  color.classList.replace(paintColor(color), paintColor(brush));  
  mouseMvmt = false;
}

function squareHoveredOver (event) {
  if (mouseMvmt) {
    const color = event.target; //triggers the event passed through squareHoveredOver
    const brush = document.querySelector('.current-brush');
    color.classList.replace(paintColor(paint), paintColor(brush));
  }
}

const color = createElement('.color');

for (const colors of color) {
  color.addEventListener('mouseenter', squareHoveredOver)
  color.addEventListener('click', clickedColor) // for when user clicks on a new color
}

function targetColor (event) {
  const brush = document.querySelector('.current-brush');
  brush.classList.replace(clickedColor(brush), clickedColor(event.target));
}

const paletteColors = document.querySelector('.palette-color');

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener('click', targetColor);
}

document.body.addEventListener('mousedown', () => {
  console.log('mouse movement')
  mouseMvmt = true;
})

document.body.addEventListener('mouseup', () => {
  console.log('mouse movement')
  mouseMvmt = false;
})










// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.

