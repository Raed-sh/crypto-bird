import React, { Component, useEffect, useRef } from 'react';
import './styles.css'





// function Game(){ 

//   const birdRef = useRef(null);
//   const gameRef = useRef(null);
//   const groundRef = useRef(null);




// }


export default class Game extends Component {
 
  componentDidMount(){
    const bird = document.querySelector(".bird");
    const gameDisplay = document.querySelector(".game-container");
    const ground = document.querySelector(".ground-moving");
  
    let birdLeft = 20;
    let birdBottom = 75;
    let gravity = 3;
    let isGameOver = false;
    let gap = 430;
  
    function startGame() {
      birdBottom -= gravity;
      bird.style.bottom = birdBottom + "px";
      bird.style.left = birdLeft + "px";
    }
    let gameTimerId = setInterval(startGame, 20);
  
    
  
    function jump() {
      if (birdBottom < 500){
        birdBottom += 50;
      }
       
      bird.style.bottom = birdBottom + "px";
      console.log(birdBottom);
    }


    document.addEventListener("keyup", jump);
    document.addEventListener("mousedown", jump);
    document.addEventListener("ontouchstart", jump);


    // function handleEvents(eventype) {
    //   switch(eventtype){
    //     case 'key':
    //       return
    //     case 'mouse':
    //       return
    //     case 'start':
    //       return
    //   }
    // }
    
  
    function generateObstacle() {
      let obstacleLeft = 300;
      let randomHeight = Math.random() * 60;
       let obstacleBottom = randomHeight;
       const obstacle = document.createElement("div");
      const topObstacle = document.createElement("div");
      if (!isGameOver) {
        obstacle.classList.add("obstacle");
        topObstacle.classList.add("topObstacle");
      }
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + "px";
      topObstacle.style.left = obstacleLeft + "px";
      obstacle.style.bottom = obstacleBottom + "px";
      topObstacle.style.bottom = obstacleBottom + gap + "px";
  
      function moveObstacle() {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + "px";
        topObstacle.style.left = obstacleLeft + "px";
  
        if (obstacleLeft === -60) {
          clearInterval(timerId);
          gameDisplay.removeChild(obstacle);
          gameDisplay.removeChild(topObstacle);
        }
        if (
          (obstacleLeft > 200 &&
            obstacleLeft < 280 &&
            birdLeft === 220 &&
            (birdBottom < obstacleBottom + 153 ||
              birdBottom > obstacleBottom + gap - 200)) ||
          birdBottom === 1
        ) {
          gameOver();
          clearInterval(timerId);
        }
      }
      let timerId = setInterval(moveObstacle, 20);
      if (!isGameOver) setTimeout(generateObstacle, 3000);
    }
     generateObstacle();
  
    function gameOver() {
      clearInterval(gameTimerId);
      console.log("game over");
      isGameOver = true;
      document.removeEventListener("keyup", jump);
      document.removeEventListener("mousedown", jump);
      document.removeEventListener("ontouchstart", jump);


      ground.classList.add("ground");
      ground.classList.remove("ground-moving");
    }
  }
  

  render() {
    return (
      
      <div className="game mob">
          <div className="border-left"></div>
          <div className="game-container">
              <div className="border-top"></div>
              <div className="sky">
                  <div className="bird"></div>
              </div>
          </div>
          <div className="ground-container">
            <div className="ground-moving"></div>
          </div>
          <div className="border-right"></div>

        <div className="myscore">
          <h4>150 P</h4>
        </div>
       
        {/* <div className="gameover">
        <h3>Game Over</h3>
          <a href="/game">Play Again</a>
          <a href="/">Home</a>
      </div>
       */}
    
  
         
      
      </div>
    )
  }
}
