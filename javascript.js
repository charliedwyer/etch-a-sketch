//CREATING GRID OF DIVS
//select grid container
const gridContainer = document.getElementById('grid-container');

//define num of rows and columns
let rows = 16;
let columns = 16;
let startSize = 256;

function generateGrid (size) {
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            div.style.backgroundColor = randomColor;
        });

        gridContainer.appendChild(div);
    }
}

//generate the grid
/*function generateGrid (numRows, numCols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            //create new div element
            const div = document.createElement('div');

            //customize div
            div.classList.add('grid-item');
            div.style.width = `${numRows}px`;
            div.style.height = `${numCols}px`;
            /*div.classList.add('square');

            div.addEventListener('mouseover', () => {
                const randomColor = getRandomColor();

                div.style.backgroundColor = randomColor;
            });

            //append grid to container
            gridContainer.appendChild(div);
        }
    }
}*/

generateGrid(rows);

//resets divs make to default
const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', function() {


    const divs = gridContainer.querySelectorAll('div'); //select all divs

    divs.forEach((div) => {
        div.style.backgroundColor = "white";     ;
    })
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const numberSlider = document.querySelector('.number-slider');
const selectNumber = document.querySelector('.selectedSize');


numberSlider.addEventListener('input', () => {
    let val = numberSlider.value;
    selectNumber.textContent = val;
    removeAllChildNodes(gridContainer);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`);
    generateGrid(val);
    

    /*const squareSize = 400 / gridSize - 1;
    const totalSquares = gridSize * gridSize;

    for (let i = 0; i < totalSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${squareSize}px`;
        gridItem.style.height = `${squareSize}px`;
        gridContainer.appendChild(gridItem);
    }
    
    /*gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`; // Add this line to update the number of rows

    generateGrid(gridSize, gridSize);*/
});
