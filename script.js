function createGrid() {
    const side = getValue()
    const container = document.getElementById("box");
    const containerSize = parseInt(getComputedStyle(container).width)
    const cellSize = (containerSize / side)
    console.log(cellSize);
    const cellTotal = side * side 
    clearGrid()
    container.appendChild(createCells(cellTotal, cellSize))
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', event => {
            cell.style['background-color'] = 'black'
        })
    })
}

function clearGrid() {
    let cells = document.querySelectorAll('.cell')
    let grid = document.querySelector('.grid')
    if (cells) {
        cells.forEach(element => {
            element.remove()
    })
    } else {
        console.log('No cells created');
    }
    if (grid) {
        grid.remove()
    }
}

function createCells(cellTotal, cellSize) {
    const grid = document.createElement('div')
    grid.className = 'grid'
    for (let i = 0; i < cellTotal; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell'
        // cell.id = `cell-${i}`
        cell.style.width = cellSize + 'px'
        cell.style.height = cellSize + 'px'
        grid.appendChild(cell);
    }
    return grid
}
function getValue() {
    let gridSize = document.getElementById('gridSize').value
    return gridSize
}
document.getElementById('btnCreate').addEventListener('click', () => createGrid())