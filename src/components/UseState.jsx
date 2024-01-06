import React from 'react'

import { useState } from 'react'

// useState => it returns a array, the array contain two item, first one a variable that can 
// contains a value, and secon one is a funtion, by using this funtion we can update the current value.

export const UseState = () => {
  // updating a single value
  const [currentNum, setNum] = useState(0)
  const handleChangeNum = () => {
    // setNum(currentNum+1)
    // Uodate value by using funtion

    setNum(
      (prevNum) => prevNum + 1
    )
  }

  // Updating a Object
  const [location,setLocation] = useState({x:5,y:10})
  const handleLocationUpdate = () => {
    setLocation(
      {
        x:15,
        y:20
      }
    )
  }


  return (
    <>
    <h1>Current Number: {currentNum}</h1>
    <button onClick={handleChangeNum} type="button">Chnage Number</button>
    <hr />
    <h2>Current Location : X-{location.x}, Y-{location.y}</h2>
    <p onMouseOver={handleLocationUpdate} >Hover here and the value will be changed</p>
    </>
  )
}
