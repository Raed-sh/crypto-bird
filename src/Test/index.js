import React, { useEffect, useState } from 'react';
import bird from '../images/flappy-bird.png'
import './styles.css'

export default function Test() {
    // Each Obstacle will be an object { 'pos': int, 'height': int }
    const [obstacles, setObstacles] = useState([
        {pos:1200, height: 150}, 
        {pos:850,height:200}, 
        {pos:510,height:30},
        {pos:150, height:250},
    ]);

        useEffect(() => {
            const updateInterval = setInterval(() => {
            updateObstacles();
            }, 150);
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
            return {pos: 500, height:getRandomInt(30,300)} 
        };


        // update obstacles to make them move and add new ones
        function updateObstacles(){
            var temp_obstacles = [...obstacles]
            for (var i=0; i<temp_obstacles.length; i++){
                if (temp_obstacles[i].pos <= 100){
                    temp_obstacles.splice(0,1)
                }
                else{
                    var new_obs = {...temp_obstacles[i]};
                    new_obs.pos -= 20;
                    temp_obstacles[i] = new_obs;
                }
            } 
            console.log(temp_obstacles)
            if (temp_obstacles.length <= 4){
                setObstacles([...temp_obstacles, generateObstacle()])
            }else{
                setObstacles(temp_obstacles)
            }
        };

        // remove the closest obstacle from the left and adds a new one to the right
        function addObstacle(){
        	const temp_obstacles = [...obstacles]
        	temp_obstacles.splice(0,1)
            setObstacles([...temp_obstacles, generateObstacle()])
        };

    return(
        <div className="testbg">
            <img src={bird} />
            {obstacles.map((o) =>
            <> 
                <div className="obst t" style={{ height:o.height, position:'absolute',left:o.pos, top:0,  transition: 'left 100ms ease-in-out'}}/>
                <div className="obst" style={{height:o.height, position:'absolute',left:o.pos, bottom:75,  transition: 'left 100ms ease-in-out '}}/>
             </>   
                )}
            
        </div>
    )
}