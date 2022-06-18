console.log('Console Working');

const gameBoard = document.getElementById('game_board');
let ship = document.getElementById('ship');

let gameBoardHeight = window.getComputedStyle(gameBoard).getPropertyValue('border-top');
console.log(gameBoardHeight);
let gameBoardHeight2 = gameBoard.getBoundingClientRect();
console.log(gameBoardHeight2);

// let laser = false;
// let activeLaser = document.getElementById('shoot'); 
// activeLaser.addEventListener('click', clickHandler);


//Add event listener for any key pressed, getComputedstyle() returns a CSSStyleDeclaration Object of styles relating to element id='ship'
window.addEventListener('keydown', function(event) {
    let gameBoardWidth = document.getElementById('game_board').clientWidth;
    let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    
    
    //Left direction movement
    if(event.key === 'ArrowLeft' && shipPosition > 1){
        ship.style.left = shipPosition - 5 + 'px';
        console.log(ship.style.left);
    }
    //Right direction movement
    if(event.key === 'ArrowRight' && shipPosition < gameBoardWidth - 32){
        ship.style.left = shipPosition + 5 + 'px';
        console.log(ship.style.left);
    }
    // if space bar is pressed, a div with the class of laser is created
    if(event.code == 'Space'){
        let laser = document.createElement('div');
        laser.classList.add('laser_beam');
        gameBoard.appendChild(laser);
    //create a setInterval function that runs every 10 milliseconds, controls the removal of aliens if hit by the laser also.     
        let shootLaser = setInterval(function(){
            let enemies = getElementsByClassName('enemy_container');

            for(i = 0; i < enemies.length; i++){
                let alien = enemies[i];

                if(alien != undefined){
                    let alienPosition = alien.getBoundingClientRect();
                    let laserPosition = laser.getBoundingClientRect();

                    if (
                        laserPosition >= alienPosition.left &&
                        laserPosition <= alienPosition.right &&
                        laserPosition <= alienPosition.top &&
                        laserPosition <= alienPosition)
                        {
                            gameBoard.removeChild(alien);
                        } //end removal of aliens
                }
            }
        }, 10);
    }
});

