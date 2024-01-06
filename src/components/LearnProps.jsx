import React from 'react'

// PROPS Getting data in child component from mother component

// export const LearnProps = (props) => {

//   return (
//     <>
//         <h1>User Name: {props.name}</h1>
//         <h1>User Profession: {props.profession}</h1>
//     </>
//   )
// }

//destructering props
export const LearnProps = (props) => {
  const {name, profession} = props;
  return (
    <>
        <h1>User Name: {name}</h1>
        <h1>User Profession: {profession}</h1>
    </>
  )
}
