import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [render, SetRender] = useState(true)
  useEffect(()=>{
    setInterval(()=>{
      SetRender(p => !p)
    },2000)
    return () => clearInterval(interval)
  },[])


  return (
    <>
    {render ? <MyComponent/> : <div></div>}
    </>
  )
}



function MyComponent(){
  useEffect(()=>{
    console.log("mounted")

    return() => {
      console.log("unmounted bish")
    }

  },[])

  return <div>
    From Inside of Mycomponent
  </div>

}

export default App
