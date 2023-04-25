const grid = document.querySelector('.grid');
let gridArea = 256;
let gridSide = 16;

createGrid(gridArea, gridSide);

function createGrid(gridArea, gridSide){
    for (let i = 0; i<gridArea; i++){
        let createDiv = document.createElement('div');
        createDiv.className = 'square';
        grid.appendChild(createDiv);

        let square = document.querySelectorAll('.square');
        square.forEach((e) => {
            e.style.width = `${700/gridSide}px`;
            e.style.height = `${700/gridSide}px`;
            e.classList.remove('colored');
        });

        changeColor(createDiv);
    };
};

function changeColor(div) {
    div.addEventListener('mouseover', e => {
        if (e.buttons == 1)
            div.classList.add('colored');});
    div.addEventListener('click', e => {
        div.classList.add('colored');
    });
};

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let gridSide = +(prompt('Enter the number of squares per side'));
    let gridArea = gridSide*gridSide;
    createGrid(gridArea, gridSide);
});