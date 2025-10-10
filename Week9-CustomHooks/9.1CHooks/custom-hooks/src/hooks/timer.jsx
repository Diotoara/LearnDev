import React, { useEffect, useState } from 'react'

export function useTimer(){
    const[time, setTime] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setTime(p => p+1)
        }, 1000)
    },[])

    return time

  }