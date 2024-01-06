import React from 'react'

// LiftingStateUp = passing data to mother component from child component

export const LiftingStateUp = (props) => {
    const sendDataToMother = () => {
        console.log("sending data to mother component");
        let values = "Succesfully catch data from child"
        props.getDataFromChild(values)
    }
  return (
    <>
    <h3>Sending Data to mother component</h3>
    <button onClick={sendDataToMother} type="button">Send Data</button>
    </>
  )
}
