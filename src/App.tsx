import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Schedule} from './SchedulePicker/Schedule';

function App() {

  return (
    <div className="App">
      <Schedule
          defaultColor='#b7b7b7'
          activeColor='#555555'
          fontSize='14px'
          cubeWidth='30px'
          cubeHeight ='30px' 
          cubeRow = {7}
          cubeColumn= {24}
          cubeRadius='2px'
          cubeMargin='1px'
          rowList={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      />
    </div>
  )
}

export default App
