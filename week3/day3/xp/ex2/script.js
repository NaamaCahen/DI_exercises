//🌟 Exercise 2 : Move The Box
let move;
let left;
function myMove() {
   move =setInterval(moveRight, 1);
    left = 0;
}
const redSquare = document.getElementById('animate');

function moveRight() {
    if (left<=350) {
        left++;
        redSquare.style.left = `${left}px`;
    } else {
        clearInterval(move);
    }
}
