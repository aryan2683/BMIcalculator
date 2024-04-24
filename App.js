import React, { useMemo, useState } from 'react';
import './App.css'
const App = () => {


const[height,setheight]=useState(180)
const[weight,setweight]=useState(70)

function onweightchange(event){
setweight(event.target.value)
}
function onheightchange(event){
  setheight(event.target.value);
}

const output=useMemo(()=>{
const calculateheight=height/100;
return (weight/(calculateheight*calculateheight)).toFixed(1)

},[weight,height])
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kg</p>
        <input className ="input-slider" type="range" step="1" min="40" max="200" onChange={onweightchange}></input>


        <p className='slider-output'>Height: {height} cm</p>
        <input className ="input-slider" type="range" step="1" min="140" max="220" onChange={onheightchange}></input>
        </div>
        <br/>
        <div className='output-section'>Your Calculated BMI is :</div>
        <p className='output' >{output}</p>
        



      
    </main>
  )
}

export default App