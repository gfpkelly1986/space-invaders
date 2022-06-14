console.log('Console Working');

const gameBoard = document.getElementById('game_board');
let ship = document.getElementById('ship');

/* Add event listener for any key pressed, getComputedstyle() returns a CSSStyleDeclaration Object of styles relating to element id='ship'*/
window.addEventListener('keydown', function(event) {
    let leftPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    /*Left direction movement*/
    if(event.key === 'ArrowLeft' && leftPosition > 1){
        ship.style.left = leftPosition - 5 + 'px';
        console.log(ship.style.left);
    }
});