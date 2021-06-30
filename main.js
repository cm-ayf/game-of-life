const row = 20;
const col = 10
let tableLt;
document.addEventListener('DOMContentLoaded', () => {
    let tr;
    const tableJq = $('table');
    tableLt = [];
    for (let i = 0; i < row; i++) {
        tr = $(`<tr></tr>`).appendTo(tableJq);
        tableLt[i] = [];
        for (let j = 0; j < col; j++) {
            tableLt[i][j] = $(`<td></td>`).appendTo(tr);
        };
    };

    tableLt[4][5].addClass('on');
    tableLt[5][5].addClass('on');
    tableLt[5][6].addClass('on');
    tableLt[6][4].addClass('on');
    tableLt[6][6].addClass('on');

    document.getElementById('next-gen').addEventListener('click', () => {
        let cnt = [];
        let u,b,l,r
        for (let i = 0; i < row; i++) {
            cnt[i] = [];
            for (let j = 0; j < col; j++) {
                cnt[i][j] = 0;
                u = i==0 ? row-1 : i-1;
                b = i==row-1 ? 0 : i+1;
                l = j==0 ? col-1 : j-1;
                r = j==col-1 ? 0 : j+1;
                [tableLt[u][l],tableLt[i][l],tableLt[b][l],tableLt[b][j],tableLt[b][r],tableLt[i][r],tableLt[u][r],tableLt[u][j]].forEach(jq => {
                    if (jq.hasClass('on')) cnt[i][j] += 1;
                })
            };
        };
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (tableLt[i][j].hasClass('on')) {
                    if (!(cnt[i][j] == 2 || cnt[i][j] == 3)) tableLt[i][j].removeClass('on');
                }else{
                    if (cnt[i][j] == 3) tableLt[i][j].addClass('on');
                };
            };
        };
    })
});