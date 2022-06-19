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
                let alienPosition = alien.getBoundingClientRect();
                let laserPosition = laser.getBoundingClientRect();
                console.log(alienPosition);
                console.log(laserPosition);
                if (
                    laserPosition.left >= alienPosition.left &&
                    laserPosition.right <= alienPosition.right &&
                    laserPosition.top - 6 <= alienPosition.top &&
                    laserPosition.bottom - 6 <= alienPosition.bottom)
                    {
                        laser.parentElement.removeChild(alien);
                    } 
                // end DOM rect comparrison values for alien position and laser position, collision detection, remove if collision detected
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
        }, 10);  // end shootLaser setInterval function
    } // end gameplay for spacebar pressed.

}); //end event listener for keydown function

// random placement of new aliens on the game board.
const increaseAliens = setInterval(function(){
    let ufo = document.createElement('div');
    ufo.classList.add('enemy_container');
    let boardWidth = parseInt(gameBoard.getBoundingClientRect().width);
    ufo.style.left = Math.floor(Math.random() * boardWidth) + 'px';
    gameBoard.appendChild(ufo);
},4000);

//control alien falling speed and falling distance
const fallingAliens = setInterval(function(){
    let ufo = document.getElementsByClassName('enemy_container');
        for(i = 0; i < ufo.length; i++){
            let fallingUfo = ufo[i];
            let ufoTop = parseInt(window.getComputedStyle(fallingUfo).getPropertyValue('top'));
            let boardBottom = parseInt(gameBoard.getBoundingClientRect().bottom);
            console.log(boardBottom);
            console.log(ufoTop);
            if(ufoTop >= boardBottom){
                clearInterval(fallingAliens);
                window.location.reload();
                gameBoard.removeChild(fallingUfo);
                console.log('game over');
            }
            fallingUfo.style.top = ufoTop + 15 + 'px';
        }
}, 500);



