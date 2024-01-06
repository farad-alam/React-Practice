import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SimpleCompo } from './components/simpleCompo'
import { LearnEvent } from './components/LearnEvent'
import { LearnProps } from './components/LearnProps'
import { LiftingStateUp } from './components/LiftingStateUp'
import { UseState } from './components/UseState'
import { UseEffect } from './components/UseEffect'

function App() {
  const getDataFromChild = (values) => {
    console.log(values);
  }

  return (
    <>
    {/* <SimpleCompo />
    <LearnEvent />
    <LearnProps name="Farad" profession="Developer" /> */}
    {/* <LiftingStateUp getDataFromChild={getDataFromChild} /> */}
    {/* <UseState /> */}
    <UseEffect />
    </>

  )
}

export default App
