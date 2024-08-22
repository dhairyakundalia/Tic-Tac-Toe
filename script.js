let turn = 'X';
let boxes = document.querySelectorAll(".box");
let gameover = 0;
let reset = document.querySelector(".reset");

reset.addEventListener("click", ()=>{
    turn = 'X';
    gameover = 0;
    for (const box of boxes) {
        box.innerText = '';
    }
    document.querySelector(".info").innerText = ''
})

function changeTurn() {
    if (turn === 'X'){
        document.querySelector(".x").classList.remove("red");
        document.querySelector(".o").classList.add("red");
        turn = 'O';
    }
    else
    {
        document.querySelector(".x").classList.add("red");
        document.querySelector(".o").classList.remove("red");
        turn = 'X';
    }
}

const checkWin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    win.forEach(e => {
        if (boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[1]].innerText === boxes[e[2]].innerText && boxes[e[0]].innerText !== '') {
            console.log(`${turn} wins`);
            document.querySelector(".info").innerText = `${turn} wins`;
            gameover = 1;

        }
    });

}

for (const box of boxes) {
    box.addEventListener("click", () => {
        if (box.innerText === '' && !gameover) {
            box.innerText = turn;
            checkWin();
            changeTurn();
        }
    })
}