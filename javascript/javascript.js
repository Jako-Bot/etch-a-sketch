function createGrid(num) {

    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("id", "grid");

    for (let row = 1; row <= num; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");

        for (let column = 1; column <= num; column++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridElement.style.height = parseInt(940/num) + 'px';
            gridElement.style.width = parseInt(940/num) + 'px';

            gridElement.addEventListener("mouseover", () => {
                gridElement.classList.add("gridElementActive");
            });
            gridRow.appendChild(gridElement);
        }

        grid.appendChild(gridRow);
    };
    
    document.body.appendChild(grid);
}

const body = document.querySelector("body");
const btn = document.getElementById("generateGrid");
btn.addEventListener("click", () => {
    let grid = document.getElementById("grid");
    if (body.contains(grid)) {
        body.removeChild(grid);
    }

    createGrid(prompt("Enter a value < 100 for your grid width: "));

});