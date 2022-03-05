const container = document.getElementById("grid");
for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.className = 'cell'
    container.appendChild(cell); 
}

