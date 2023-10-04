const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
};

function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
};

function setCurrentSize(newSize) {
    currentSize = newSize;
};

const colorBtn = document.getElementById('colorBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

colorBtn.onclick = () => setCurrentMode('color');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
};

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
};

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
};

function clearGrid() {
    grid.innerHTML = '';
};

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    };
};

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe';
    };
};

function activateButton(newMode) {
    if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    };

    if (newMode === 'color') {
        colorBtn.classList.add('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.add('active');
    };
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
};

//
// const title = document.querySelector('.title');
// const container = document.querySelector('.container');

//SOME JS STYLING
// title.setAttribute('style', 'color: red;');
// container.setAttribute('style', 'border: 4px solid black; height: 800px; width: 800px;');

//create 16 boxes

//on 16 lines

//