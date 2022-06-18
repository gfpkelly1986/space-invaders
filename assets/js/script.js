console.log('Console Working');

const gameBoard = document.getElementById('game_board');
let ship = document.getElementById('ship');

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
            let enemies =document.getElementsByClassName('enemy_container');
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
                        } 
                }// end DOM rect comparrison values for alien position and laser position, collision detection, remove if collision detected
            }// end loop that fetches the DOM rect values for the laser and aliens
            // move the laser up the game board 3px every 10 milliseconds, remove laser from the board if it hits the top of the game board.
            let laserBottom = parseInt(window.getComputedStyle(laser).getPropertyValue('bottom'));
            let gameBoardHeight = gameBoard.getBoundingClientRect().height;

            if(laserBottom + 40 >= gameBoardHeight){
                clearInterval(shootLaser);
                gameBoard.removeChild(laser);
            }

            laser.style.left = shipPosition + 10 + 'px';
            laser.style.bottom = laserBottom + 3 + 'px';
        }, 10);
    }
});

