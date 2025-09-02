import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
    <CardWrapper>
      hi there
      <br />
      <a href="https://www.youtube.com">this is youtube</a>
    </CardWrapper>
    <CardWrapper>
      <br />
      this that shii bruh
      <h1>that shit hard</h1>
      auto se utra bola wassup mama
      <h1>Vishay Khatam</h1>
    </CardWrapper>
    </>
  )
}


function CardWrapper({children}){
  return(
    <div style={{border: "2px solid black"}}>
      {children}
    </div>  
  )
}

export default App

