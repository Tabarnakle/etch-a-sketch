function createGrid(side) {
    const container = document.getElementById("box");
    const containerSize = parseInt(getComputedStyle(container).width)
    const cellSize = (containerSize / side)
    const cellTotal = side * side
    // clearGrid()
    container.appendChild(createCells(cellTotal, cellSize))
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mouseover', event => {
            cell.style['background-color'] = 'black'
        })
    })
}

function clearGrid() {
    let cells = document.querySelectorAll('.cell')
    if (cells) {
        cells.forEach(element => {
            element.remove()
    })
    } else {
        console.log('No cells created');
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
document.getElementById('btnClear').addEventListener('click', () => clearGrid())
document.getElementById('btnCreate').addEventListener('click', () => createGrid(16))