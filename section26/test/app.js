// const p1 = document.querySelector('#p1Display');
// const p2 = document.querySelector('#p2Display');
// const winningScore = document.querySelector('#winningScore');
// const reset = document.querySelector('#reset');
// const cardFooter = document.querySelector('.card-footer');
// let p1Score = parseInt(p1.innerText);
// let p2Score = parseInt(p2.innerText);
// let winScore = parseInt( winningScore.value);
// let isGameOver = false;

// function checkGameOver() {
//     if (p1Score === winScore || p2Score === winScore) {
//         return
//     }
// }

// cardFooter.addEventListener('click', function(e) {
//     if (e.target.id === "reset") {
//         p1.innerText = 0;
//         p2.innerText = 0;
//     }
//     if (e.target.id === "p1Button") {
//         p1.innerText = p1Score + 1;
//     } else if (e.target.id === "p2Button") {
//         p2.innerText = p2Score + 1;
//     }

//     checkGameOver();
// })

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset');
const  winningScoreSelect = document.querySelector('#winningScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
        if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
})

resetBtn.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;

    }
}