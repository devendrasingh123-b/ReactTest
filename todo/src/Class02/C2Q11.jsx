import React, { useState } from 'react'

function C2Q11() {

const [color,setColor]=useState("Green")

function setValue(){
    if(color=="Green"){
        setColor("Yellow")
    }else{
        setColor("Green")
    }
}

  return (
    <>
    <h1>Toggle</h1>
    
    <button onClick={setValue} style={{backgroundColor:color=="Green"?"green":"yellow"}}>ToggleButton</button>


    <h1>BackGroung color is :{color}</h1>
    
    </>
  )
}

export default C2Q11