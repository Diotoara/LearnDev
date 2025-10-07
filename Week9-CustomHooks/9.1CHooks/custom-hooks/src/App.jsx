import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

  function useIsOnline(){
    const [mode, setMode] = useState(window.navigator.onLine)
    useEffect(()=>{
      window.addEventListener('online', () => setMode(true));
      window.addEventListener('offline', () => setMode(false));
    },[mode])

    return mode

  }

  function App() {

    const mode = useIsOnline()

    return(
      <div>
        {console.log(window.navigator.onLine)}
        {console.log(mode)}
        {mode ? <h1>Server is Online</h1> : <h2>Server is offline</h2>}
      </div>
    )

}

export default App