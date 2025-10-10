import React, { useEffect, useState } from 'react'

export function useDebounce(input, time){
    const [result, setResult] = useState("")
    useEffect(()=>{
        const id = setTimeout(()=>{
            setResult(`${input}`)
        }, time)

        return()=>clearTimeout(id)
    }, [input])
    {console.log("debounce render")}
    return result

  }