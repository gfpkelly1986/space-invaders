console.log('Console Working');

const gameBoard = document.getElementById('game_board');
let ship = document.getElementById('ship');

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
            let enemies = document.getElementsByClassName('enemy_container');
            for(i = 0; i < enemies.length; i++){
                let alien = enemies[i];
                let alienPosition = alien.getBoundingClientRect();
                let laserPosition = laser.getBoundingClientRect();
                let scoreCount = parseInt(document.getElementById('score_count').innerHTML);
                if (
                    laserPosition.left >= alienPosition.left &&
                    laserPosition.right <= alienPosition.right &&
                    laserPosition.top - 6 <= alienPosition.top &&
                    laserPosition.bottom - 6 <= alienPosition.bottom)
                    {
                        laser.parentElement.removeChild(alien);
                        document.getElementById('score_count').innerHTML = scoreCount + 1;
                    } 
                // end DOM rect comparison values for alien position and laser position, collision detection, remove if collision detected
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
        });  // end shootLaser setInterval function
    } // end gameplay for spacebar pressed.

}); //end event listener for keydown function

//set countdown timer
const count = setInterval(function(){
    let countDown = parseInt(document.getElementById('countdown').innerHTML);
    document.getElementById('countdown').innerHTML = countDown - 1;
    if(countDown === 1){
        clearInterval(count);
        window.location.reload();
    }
},1000)

// increase alien ememies
const increaseAliens = setInterval(function(){
    let ufo = document.createElement('div');
    ufo.classList.add('enemy_container');
    let boardWidth = parseInt(gameBoard.getBoundingClientRect().width);
    ufo.style.left = Math.floor(Math.random() * (boardWidth - 30))  + 'px';
    gameBoard.appendChild(ufo);
}, 3000);

// control the fall spedd of the aliens
  const fallingAliens = setInterval(function(){
    let ufo = document.getElementsByClassName('enemy_container');
        for(i = 0; i < ufo.length; i++){
            let fallingUfo = ufo[i];
            let ufoTop = parseInt(window.getComputedStyle(fallingUfo).getPropertyValue('top'));
            let boardBottom = parseInt(gameBoard.getBoundingClientRect().bottom - 150);
            let shipCoordinates = ship.getBoundingClientRect();
            let fallingCoordinates = fallingUfo.getBoundingClientRect();
            if(ufoTop >= boardBottom){
                clearInterval(fallingAliens);
                window.location.reload();
                gameBoard.removeChild(fallingUfo);
                console.log('game over');
            }
            if( fallingCoordinates.bottom >= shipCoordinates.top &&
                fallingCoordinates.left -10 <= shipCoordinates.left &&
                fallingCoordinates.right -10<= shipCoordinates.right){
                clearInterval(fallingAliens);
                window.location.reload();
                gameBoard.removeChild(fallingUfo);
                console.log('game over');
            }
            fallingUfo.style.top = ufoTop + 15 + 'px';
        }
},4000)

//Mobile controls
function moveLeftMobile(){
    let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    ship.style.left = shipPosition - 5 + 'px';
    }
    
function moveRightMobile(){
    let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    ship.style.left = shipPosition + 5 + 'px';
}

function mobileShoot(){
    let shipPosition = parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    let laser = document.createElement('div');
    laser.classList.add('laser_beam');
    gameBoard.appendChild(laser);
    let shootLaser = setInterval(function(){
        let enemies = document.getElementsByClassName('enemy_container');
        for(i = 0; i < enemies.length; i++){
            let alien = enemies[i];
            let alienPosition = alien.getBoundingClientRect();
            let laserPosition = laser.getBoundingClientRect();
            let scoreCount = parseInt(document.getElementById('score_count').innerHTML);
            if (
                laserPosition.left >= alienPosition.left &&
                laserPosition.right <= alienPosition.right &&
                laserPosition.top - 6 <= alienPosition.top &&
                laserPosition.bottom - 6 <= alienPosition.bottom)
                {
                    laser.parentElement.removeChild(alien);
                    document.getElementById('score_count').innerHTML = scoreCount + 1;
                } 
        }
        let laserBottom = parseInt(window.getComputedStyle(laser).getPropertyValue('bottom'));
        let gameBoardHeight = gameBoard.getBoundingClientRect().height;

        if(laserBottom + 40 >= gameBoardHeight){
            clearInterval(shootLaser);
            gameBoard.removeChild(laser);
        }

        laser.style.left = shipPosition + 10 + 'px';
        laser.style.bottom = laserBottom + 3 + 'px';
    });
}


    




