import React, { useEffect, useState } from 'react'

export function useIsOnline(){
    const [mode, setMode] = useState(window.navigator.onLine)
    useEffect(()=>{
      window.addEventListener('online', () => setMode(true));
      window.addEventListener('offline', () => setMode(false));
      return ()=>{  
        window.removeEventListener('offline', () => setMode(false))
        window.removeEventListener('online', () => setMode(true))
      }
    },[])

    return mode

  }