const gridSize = 20

let gridExternal = document.querySelector("#grid")
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
    }
    gridExternal.appendChild(row)
}

gridExternal.style.setProperty("--grid-size", gridSize)

const gridInternalItems = document.querySelectorAll(".grid-internal")

gridInternalItems.forEach(gridInternal => {
    gridInternal.addEventListener("mouseover", event => {
        event.target.classList.add('hovered');
        event.target.style.backgroundColor = hoverColor;
    })
})

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
    gridInternalItems.forEach(gridInternal => {
        gridInternal.style.backgroundColor = "lightgray"; 
    });
});

let hoverColor = "violet";
const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", () => {
    hoverColor = colorPicker.value; 
});