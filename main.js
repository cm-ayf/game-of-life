const row = 20;
const col = 10
document.addEventListener('DOMContentLoaded', () => {
    const table = $('table');
    let tr;
    for (let i = 0; i < row; i++) {
        tr = $(`<tr></tr>`).appendTo(table);
        for (let j = 0; j < col; j++) {
            $(`<td id="${i},${j}"></td>`).appendTo(tr);
        };
    };
});