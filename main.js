const row = 20;
const col = 10
const tableJq = $('table');
const tableLt = [];
document.addEventListener('DOMContentLoaded', () => {
    let tr;
    for (let i = 0; i < row; i++) {
        tr = $(`<tr></tr>`).appendTo(tableJq);
        tableLt[i] = [];
        for (let j = 0; j < col; j++) {
            tableLt[i][j] = $(`<td id="${i},${j}"></td>`).appendTo(tr);
        };
    };

    tableLt[4][5].addClass('on');
    tableLt[5][5].addClass('on');
    tableLt[5][6].addClass('on');
    tableLt[6][4].addClass('on');
    tableLt[6][6].addClass('on');
});