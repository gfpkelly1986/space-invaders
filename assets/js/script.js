console.log('Console Working');

const gameBoard = document.getElementById('game_board');
let ship = document.getElementById('ship');

// let laser = false;
// let activeLaser = document.getElementById('shoot'); 
// activeLaser.addEventListener('click', clickHandler);


/* Add event listener for any key pressed, getComputedstyle() returns a CSSStyleDeclaration Object of styles relating to element id='ship'*/
window.addEventListener('keydown', function(event) {
    let gameBoardWidth = document.getElementById('game_board').clientWidth;
    let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    
    
    /*Left direction movement*/
    if(event.key === 'ArrowLeft' && shipPosition > 1){
        ship.style.left = shipPosition - 5 + 'px';
        console.log(ship.style.left);
    }
    /* Right direction movement */
    if(event.key === 'ArrowRight' && shipPosition < gameBoardWidth - 32){
        ship.style.left = shipPosition + 5 + 'px';
        console.log(ship.style.left);
    }
    if(event.code == 'Space'){
        let laser = document.createElement('div');
        laser.classList.add('laser_beam');
        gameBoard.appendChild(laser);
    }
});

