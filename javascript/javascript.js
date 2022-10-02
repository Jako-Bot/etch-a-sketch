function createGrid(num) {
    for (let row = 1; row <= num; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");

        for (let column = 1; column <= num; column++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridElement.style.height = parseInt((940-(num+1))/num) + 'px';
            gridElement.style.width = parseInt((940-(num+1))/num) + 'px';

            gridRow.appendChild(gridElement);

        }

        grid.appendChild(gridRow);
    };

}

const grid = document.querySelector("#grid");

createGrid(64);