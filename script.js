function createGrid(side) {
    const container = document.getElementById("box");
    const containerSize = parseInt(getComputedStyle(container).width)
    const cellSize = (containerSize / side)
    const cellTotal = side * side
    clearGrid()
    container.appendChild(createCell(cellTotal, cellSize))
}

function clearGrid() {
    document.querySelectorAll('.cell').forEach(element => {
        element.remove()
    });
}

function createCell(cellTotal, cellSize) {
    const grid = document.createElement('div')
    grid.className = 'grid'
    for (let i = 0; i < cellTotal; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell'
        cell.style.width = cellSize + 'px'
        cell.style.height = cellSize + 'px'
        grid.appendChild(cell);
    }
    return grid
}