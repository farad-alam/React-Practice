import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// useState => it returns a array, the array contain two item, first one a variable that can 
// contains a value, and secon one is a funtion, by using this funtion we can update the current value.

export const UseEffect = () => {
  // updating a single value
  const [currentNum, setNum] = useState(0)
  const handleChangeNum = () => {
    setNum(
      (prevNum) => prevNum + 1
    )
  }

  const [newRandomNum, setnewRandomNum] = useState(null)
  const genarateRundomNumber = () =>{
      let  randomNumber = Math.floor(Math.random() * 100) + 1
        setnewRandomNum(randomNumber)
  }

//  E-1: it runs each time the component mounted and re-render
//   useEffect(() => {
//     console.log("UseEffect is called ----");
//   })

  //  E-2: it runs each time the component mounted (empty array means no dependency)
//   useEffect(() => {
//     console.log("UseEffect is called ----");
//   }, [])

//  E-3: it runs each time the component mounted and whenever the dependency ia changed (here the dependency is currenNum)
    // useEffect(() => {
    // console.log("UseEffect is called ----");
    // }, [currentNum])

//  E-4: The cleanup funtion (the funtion you return from useEffect) runs wheen the component unmount or the dependencys in the dependecy arry are changed.
//  the cleanup funtion called before the new effect runs. 
useEffect(() => {
    console.log("UseEffect is called ----");
    return () => {
        console.log('The Return funtions called-------');
    }
    }, [currentNum])


  return (
    <>
    <h1>Current Number: {currentNum}</h1>
    <button onClick={handleChangeNum} type="button">Chnage Number</button>
    <hr />
    <h2>Random Number: {newRandomNum}</h2>
    <button onClick={genarateRundomNumber} type="button">Genarate Random number</button>
    </>
  )
}
