import React from 'react'

export const LearnEvent = () => {
    const handleButtonOne = (e) => {
        e.preventDefault()
        console.log('Button One was Clicked');
    }
    const handleButtonTwo =(name, age) => {
        console.log("Name: ",name,"Age: ", age);
    }

    // when providing handle funtion for click even no need to use parenthesis
  return (
    <>
    {/* without argument */}
    <button onClick={handleButtonOne} type="button">Button One</button>
    <br />
    {/* with argument */}
    <button onClick={(e) => handleButtonTwo('Farad',26)} type="button">Button Two</button>
    </>
  )
}
