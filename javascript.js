//CREATING GRID OF DIVS
//select grid container
const gridContainer = document.getElementById('grid-container');

//define num of rows and columns
const rows = 16;
const columns = 16;

//generate the grid
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        //create new div element
        const div = document.createElement('div');

        //customize div
        div.classList.add('grid-item');
        div.classList.add('square');

        div.addEventListener('mouseover', () => {
            div.classList.add('hover');
        });

        //append grid to container
        gridContainer.appendChild(div);
    }
}

//resets divs make to default
const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', function() {
    const divs = document.querySelectorAll('div'); //select all divs

    divs.forEach((div) => {
        div.classList.remove('hover');
    })
});

