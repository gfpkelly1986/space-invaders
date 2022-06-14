console.log('Console Working');

const gameBoard = document.getElementById('game_board');
const ship = document.getElementById('ship');

window.addEventListener('keydown', function(event) {
    let left = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    console.log('left');
});