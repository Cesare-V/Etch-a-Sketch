const container = document.querySelector('.container');
const gridSize = 16;

function createGrid(size) {
    container.innerHTML = ''; // Pulisce la griglia precedente, se presente
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${100 / size}%`;
        gridItem.style.height = `${100 / size}%`;

        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('hovered');
        });

        container.appendChild(gridItem);
    }
}

createGrid(gridSize);