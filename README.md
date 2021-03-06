# Space Invaders

![Responsive Images for this website](assets/images/readmeimgs/responsive-space-invaders.PNG)

## Intended Purpose of This Website:

This website is a simple fun game that uses JavaScript to allow users to interact with it. The user can navigate the ship left and right with the left and right arrow keys on desktop and has some left and right buttons to press while on mobile or touch screen devices. They can also shoot with the spacebar being pressed down or by using the circular icon on mobile devices. The user is given one minute to shoot as many enemies as possible before the time runs out and the game re-loads. Their current score is tracked throughout the game and their name is added to the game after they enter it on the welcome screen. A live link to the deployed game is given here: [My git hub pages link of live website](https://gfpkelly1986.github.io/space-invaders/) 

# Table of Contents
   *[Live Features](https://github.com/gfpkelly1986/space-invaders#live-features)*

   *[Desired Features](https://github.com/gfpkelly1986/space-invaders#desired-features)*

   *[Validator Testing](https://github.com/gfpkelly1986/space-invaders#validator-testing)*

   *[Bugs](https://github.com/gfpkelly1986/space-invaders#bugs)*

   *[Javascript Methods Used](https://github.com/gfpkelly1986/space-invaders#javascript-methods-used)*

   *[Console Logs During Development](https://github.com/gfpkelly1986/space-invaders#console-logs-during-development)*

   *[Deployment](https://github.com/gfpkelly1986/space-invaders#deployment)*

   *[Wireframes](https://github.com/gfpkelly1986/space-invaders#wireframes)*

   *[Credits/Attributions](https://github.com/gfpkelly1986/space-invaders#creditsattributions)*

# Live Features
- Game Welcome Screen:
    - Welcome the user to the game.
    - Give an overview of the rules of the game.
    - Allow users to enter a username .
    - Button to click and get to the game board screen.

![Landing page welcome screen for space invaders game](assets/images/readmeimgs/welcomescreen-spaceinvaders.PNG)

The welcome screen for this website allows users to land at the site without having to jump straight into the game. They have an oppotunity to enter their username in the text input field and read the rules of the game before it begins. The username is taken from this page and its value populates the username field above the gameboard on the playgame page of the site. Some imagery is used but is kept to a minimum as the focus of the website was on the use of Javascript.

- Game Board Screen:
   - Users name added to the top of the page
   - Current Score tab that tracks the users score
   - A countdown timer that counts down from one minute
   - Enemies contained within the game board
   - The Aliens/Enemies (Controlled creation and falling rate)
   - The Users ship (Shoots laser)
   - Controls for touch screen/mobile users

### Users name added to the screen:

![Users name added to the game board](assets/images/readmeimgs/Usersname.PNG)

#### Code used to perform this function:

![Code to get the username](assets/images/readmeimgs/Getting-the-user-name.PNG)

The above code was placed in a seperate js file (getuser.js) and the link to it placed in index.html. It was first placed in the script.js file along with the rest of the code and I had issues with the session storage being retained. I am still not fully aware why this was the case. I believe it to be due to either the window keydown event listener or the setInterval functions running within the script.js file. When watching the console logs for the user input you would see the correct value show up briefly but the console would refresh constantly, then when the game page loaded it would not keep the value and populate the username field. This soloution of seperating the code to get the username out to another js file worked for me but there probably is other solutions to this problem. This function uses the sessionSorage.setItem(keyname, value) method which takes two arguments, a keyname(string) and a value. In the case the keyname is 'NewUser' and the value is the users name, which is a string, stored in the variable called user, taken from the text input field. A link to W3C schools for this method is here: https://www.w3schools.com/jsref/met_storage_setitem.asp 

![Code to set the usename](assets/images/readmeimgs/Setting-the-username.PNG)

The code above was kept in the script.js file above the window-keydown-eventlistener. When the window loads it calls the addNewUser() function. The addNewUser function uses sessionStorage.getItem(keyname) method to get the value associated with the 'NewUser' keyname. It stores it in the newestUser variable and then populates the innerHTML of the element with the ID of 'username'. A link to  W3C schools for this methos is here: https://www.w3schools.com/jsref/met_storage_getitem.asp

### Current score tab that tracks the users score:

![The users current score](assets/images/readmeimgs/Currentscoretab.PNG)

#### Code used to perform this function:

![Current score tab for the users score](assets/images/readmeimgs/scorecount3.PNG)

The above for loop is nested in a setInterval function which is in turn nested in an if statement that is executed within the window-keydown-eventlistener if the condition of the 'Space' key being pressed is returned true. When pressed the setInterval function runs at the default 10 millisecond time interval. The loop runs as follows: Every 10 milliseconds: for each enemy with a class of enemy_container, store each div in the alien variable, store each aliens position relative to the viewport in the alienPosition variable, store the position of the laser relative to the viewport in the laserPosition variable and if they collide remove that alien and add one to the scorecount. The score_count elements default innerHTML is set to 0. This is stored in scoreCount and incremented by one with each collision.

### Countdowntimer that counts down from one minute:

![Screenshot of countdown feature](assets/images/readmeimgs/timeremaining.PNG)

#### Code used for theis function:

![Countdown timer code](assets/images/readmeimgs/Countdowntimer.PNG)

The setInterval function avove runs every second. It takes the element with an ID of countdown and stores its innerHTML in the countDown variable using the parseInt method. It decrements its value by 1 and updates the DOM with its new value. If the value of the countdown hits 1 window is re-loaded. The value of 1 was chosen as there was an issue where the value of -1 was seen just before the window had time to reload if the condition in the if statement was set to zero.

### Enemies contained within the game board:

![Screenshot of enemies contained within the gameboard](assets/images/readmeimgs/contained-enemies.PNG)

#### Code used to perform this function:

![code to position the aliens on the board (contained) after they are created](assets/images/readmeimgs/position-increasing-aliens.PNG)

The above code is part of the increasingAliens setInterval function which will be discussed below. The width of the board is stored in the boardWidth variable using the combination of the parseInt() method and the getBoundingClientRect() method. The getBoundingClientRect() method returns a DOM Rect Object which contains an elements width and height and its position relative to the viewport as discussed here: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect.
To position each new alien randomly within the gameBoard the Math.floor(Math.random()) methods were used. An integer value within the game board with minus the alien width is returned and applied to the left style position of the alien. Each one is then appended to the game board using the .appendChild() method.

### The Aliens/Enemies (Controlled creation and falling rate):

![Falling aliens image](assets/images/readmeimgs/fallingrate.PNG)

#### Code used to perform this function:

Each alien is created using the first 2 lines of code within the increaseAliens setinterval function. A new div is created every 3 seconds using the createElement() method and then the class list of enemy_container is added. If the div was to be appended to the board at this point the div would be placed in the top left as set in the CSS stylesheet. It is positioned as discussed above. The variable of alien could have been reused here as it has local scope in the shootLaser function above but changing the name to ufo hepled me to think about each function seperately.

![Increasing the aliens](assets/images/readmeimgs/increaseing-aliens.PNG)

![Alien falling rate](assets/images/readmeimgs/fallingaliens.PNG)

The code above controls the falling rate and also collisions between the aliens and the bottom of the board and collisions between the aliens and the ship. If the ship or board is not hit the aliens drop down every 4 seconds by 15 px. The timing at present of the falls means the time runs out before the aliens reach the ship or board but if its increased the window will reload if either event occurs. The getComputedStyle().getPropertyValue() is used to get the top: 0px value of the enemy_container class so it can be used add to in the last line of code, fallingUfo.style.top = ufoTop + 15 + 'px'. The getComputedStyle() method can be read about here: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle. The key understanding is that this method returns a live CSSStyleDeclaration object, which updates automatically when the element's styles are changed. Every 4 seconds the top value is increased by the setInterval function.

### The Users ship (Shoots laser):

![screenshot of laser shot](assets/images/readmeimgs/shoot-laser.PNG)

#### Code used to perform this function:

![screenshot of code to shoot laser](assets/images/readmeimgs/shoot-laser-code.PNG)

The code above is contained within the shootLaser setInterval function from above that tracks the current score also. Again getComputedStyle() and getPropertyValue track the lasers bottom CSS style value, if the top of the laser (bottom + 40px) hits the top of the gameboard, the laser is removed from the gameboard and the shootLaser interval is cleared, until the space bar is pressed again. The gameBoardHeight variable is getting its value from the getBoundingClientRect().height property value.

### Controls for touch screen/mobile users:

![screenshot of touch controls](assets/images/readmeimgs/touch-controls.PNG)

#### Code used for this function:
To control the game from a touch screen I reused most of the code from above but put them into seperate functions as I had difficulty getting the right conditional test for testing if the space bar being pressed being or the controller clicked was evaluating to true. Most tests evaluated to false and one that worked seemed to make the interval repeat itself(double its speed). I called these functions using onkey down, onmouse up, onmousedown and on onclick from each icon as shown below. Using multiple event handlers had the effect of speeding up the left and right movement on mobile so less clicks were needed to get the ship to move further.

![Calling the mobile controller functions](assets/images/readmeimgs/mobile-controller-function-calls.PNG)


# Desired Features:
- Game Sounds
   - Apply sounds when the ship shoots a laser 
   - Apply sounds for when the target is eliminated

- More imagery/Apply theme to game
   - Apply a better theme to the game, possibly star wars themed.
   - More imagery, particularly to the desktop to help fill the screen

- Store the highest score
   - Compare the users current score against the highest score which would be stored permanantly. If higher then update the high score.

- Pause the game
   - Provide a way for the user to pause the game.

- Load the game from a start button
   - I attempted to do this with this version but the setInterval function kept speeding up with each shot fired. This problem is something I want to understand better.

- Speed levels
   - Provide some increasing levels of speed if certain scores are reached.

# Validator Testing

![Accessibility score for this ](assets/images/readmeimgs/Accessibility-SEO-score.PNG)

![HTML Validation check](assets/images/readmeimgs/html-validation.PNG)

![CSS Validation](assets/images/readmeimgs/CSS-validation.PNG)

- Light house on Google Chrome was used to test the webpage for Accessibility and SEO. The results were 96 for accessibility and 100 for SEO.
- The W3C Schools HTML validator was used to test the markup for the site. There were no errors in the final markup. One small error that had to be fixed was a space in one of the file paths for the alien images in the header. 
- The W3C Schools CSS validator was used to test the CSS during development and before final push to git hub. There were no CSS errors returned from this validator test.
- The JavaScript code was run through the Jshint linter. There are no significant issues to report other than the image below:

![JSHint results](assets/images/readmeimgs/3unused-variables.PNG)

These 3 functions are called from the mobile controller icon elements on playgame.html and so show up as unused variables in the JSHint results. 

# Bugs 
- The main bug I had during development was when trying to implement a 'start game' button. The function would execute fine but as you attempted to play the game each shot fired made the game run faster and faster until it became unplayable. I had this function outside the code for the window-keydown-eventlistener and could not work out why the shootLaser setInterval function would speed up so for now the enemies are created quite slowly to allow the user to start without getting overwhelmed by enemies.

# Javascript Methods Used
- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)            
- [getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) 
- [getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)   
- [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)         
- [createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)       
- [getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)
- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [setItem() + getItem()](https://www.w3schools.com/jsref/met_storage_getitem.asp)

# Console logs during development
![comparing DOMRect object values](assets/images/readmeimgs/compare-domrect-values.PNG) ![DOMRect docs](assets/images/readmeimgs/getBoundingClientRect.PNG)

Logging DOMRect values for collision detection.

![logging left movement values](assets/images/readmeimgs/log-left-movement.PNG)

Logging values for left movement to console, minus values outside the gameboard.

![logging right movement values](assets/images/readmeimgs/log-right-movement.PNG)

Logging values for right movement to console.

![logging falling aliens values](assets/images/readmeimgs/log-falling-aliens.PNG)

Logging falling alien values for game reload on ship or board colision.

# Deployment
- This webpage was deployed to git hub pages at the following link  [My git hub pages link of live website]( https://gfpkelly1986.github.io/space-invaders/) 
- Steps taken
    1. Go to settings tab at the top banner of the repository page in question.
    2. Click on pages on the left hand menu
    3. Select main branch from the options pane. (Main replaced Master as terminology to describe the primary code branch)
    4. Select save, and GitHub will publish the site.


# Wireframes
![landing page wireframe](assets/images/readmeimgs/wireframe-landing-page.jpg)

Landing page Wireframe.

![play game wireframe](assets/images/readmeimgs/wireframe-playgame.jpg)

Board game page wireframe.

# Credits/Attributions
- Tutorials watched:

   - [LearnMux Tamil YouTube](https://www.youtube.com/watch?v=mwl95yvl-n0)   [+ Github](https://github.com/learnmux/Space-Shooter-Game-Using-Javascript)

   - [Freecodecamp YouTube](https://www.youtube.com/watch?v=lhNdUVh3qCc)     [+ Github](https://github.com/kubowania/space-invaders)

   - [Coding Dojo YouTube](https://www.youtube.com/watch?v=XmqAPQsc1n4)      [+ Github](https://github.com/keephopealive/academy-space-invaders)

   - [Coding with Adam YouTube](https://www.youtube.com/watch?v=i7FzA4NavDs)    [+ Github](https://github.com/CodingWith-Adam/shooting-bullets-game-dev)