import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../helpers/windowDims';
import bird from '../images/flappy-bird.png'
import './styles.css'

export default function Test() {
    // Each Obstacle will be an object { 'pos': int, 'height': int }
    const { height, width } = useWindowDimensions();
    const [didPopulate, setDidPopulate] = useState(false);
    const[bPos, setBPos] = useState(50)
    console.log(height, width)
    const [obstacles, setObstacles] = useState([
    ]);



        function jump(){
            setBPos(bPos+1);
        }

        function prePopulate(){
            setDidPopulate(true)
            var temp_obs = []
            for (var i=0; i<9; i++){
                temp_obs.push({pos:i*width/10, height:getRandomInt(30,(height/2)-(height/7))})
            }
            setObstacles(temp_obs)
        }
        useEffect(() => {
            if (!didPopulate){
                prePopulate()
            }
            const updateInterval = setInterval(() => {
            updateObstacles();
            
            }, 300);
            // const addInterval = setInterval(() => {
            //     addObstacle();
            // }, 100);
            return () => {
                clearInterval(updateInterval);
                // clearInterval(addInterval)
                };
        }, [obstacles]);
        
        // define a function to set the height
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        };
        
        // add a new obstacle to the array with a defined starting pos in this case 200
        function generateObstacle(){
            return {pos: (width-(width/20)), height:getRandomInt(30,(height/2)-(height/8))} 
        };

        function drop(){
            setBPos(bPos-3)
            if (bPos <= 0){
                // endGame();
            }
        }

        function checkCollision(){
            if (obstacles[0].height >= bPos){
                //endGame();
            }
        }

        // update obstacles to make them move and add new ones
        function updateObstacles(){
            drop();
            checkCollision();
            var temp_obstacles = [...obstacles]
            for (var i=0; i<temp_obstacles.length; i++){
                if (temp_obstacles[i].pos < 10){
                    temp_obstacles.splice(0,1)
                    temp_obstacles.push(generateObstacle())
                    break;
                }
                temp_obstacles[i] = {...temp_obstacles[i], pos:temp_obstacles[i].pos-35};
            } 
            
                setObstacles(temp_obstacles)
        };

        // remove the closest obstacle from the left and adds a new one to the right
        function addObstacle(){
        	const temp_obstacles = [...obstacles]
        	temp_obstacles.splice(0,1)
            setObstacles([...temp_obstacles, generateObstacle()])
        };

    return(
        <div className="testbg" onClick={() => jump()}>
            <img src={bird} style={{position:'absolute',  bottom:bPos.b}}/>
            {obstacles.map((o) =>
            <> 
                <div className="obst t" style={{ height:o.height, position:'absolute',left:o.pos, top:0,  transition: 'left 100ms ease-in-out'}}/>
                <div className="obst" style={{height:o.height, position:'absolute',left:o.pos, bottom:75,  transition: 'left 100ms ease-in-out '}}/>
             </>   
                )}
            
        </div>
    )
}