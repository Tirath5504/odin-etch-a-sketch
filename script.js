let gridSize = parseInt(prompt("Enter grid size: "));

while (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    gridSize = parseInt(prompt("Please enter a valid grid size (a positive number lesser than 100): "));
}

const gridExternal = document.querySelector("#grid")
const gridInternalItems = []
let hoverColor = "violet"
gridExternal.classList.add("grid-external")

for (let i = 0; i < gridSize; i++)
{
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < gridSize; j++)
    {
        const gridInternal = document.createElement("div");
        gridInternal.classList.add("grid-internal")
        row.appendChild(gridInternal)
        gridInternalItems.push(gridInternal)
    }
    gridExternal.appendChild(row)
}

gridExternal.style.setProperty("--grid-size", gridSize)

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", () => {
    hoverColor = colorPicker.value; 
});

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
    gridInternalItems.forEach(gridInternal => {
        gridInternal.style.backgroundColor = "lightgray"; 
    });
});

gridExternal.addEventListener("mouseover", event => {
    if (event.target.classList.contains('grid-internal')) {
        event.target.classList.add('hovered');
        event.target.style.backgroundColor = hoverColor;
    }
});

gridExternal.addEventListener("mouseout", event => {
    if (event.target.classList.contains('grid-internal')) {
        event.target.classList.remove('hovered');
    }
});