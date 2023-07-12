//CREATING GRID OF DIVS
//select grid container
const gridContainer = document.getElementById('grid-container');

//generates the grid
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


generateGrid(16);

//resets divs make to default white color
const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', function() {


    const divs = gridContainer.querySelectorAll('div'); //select all divs

    divs.forEach((div) => {
        div.style.backgroundColor = "white";     ;
    })
});

//gets a random color to apply to the square that is being hovered on
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//clears the grid to generate a new grid
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const numberSlider = document.querySelector('.number-slider');
const selectNumber = document.querySelector('.selectedSize');

//gets the value from the slider then creates a new grid with the size from the slider
numberSlider.addEventListener('input', () => {
    let val = numberSlider.value;
    selectNumber.textContent = val;
    removeAllChildNodes(gridContainer);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`);
    generateGrid(val);

});
