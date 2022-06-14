console.log('Console Working');

const gameBoard = document.getElementById('game_board');
const ship = document.getElementById('ship');

/* Add event listener for any key pressed, getComputedstyle() returns a CSSStyleDeclaration Object of styles relating to element id='ship'*/
window.addEventListener('keydown', function(event) {
    let left = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    console.log(left);
    /*Left direction movement*/
    if(event.key === 'ArrowLeft'){
        console.log('pressed left, position is: ' + left);
    }
});