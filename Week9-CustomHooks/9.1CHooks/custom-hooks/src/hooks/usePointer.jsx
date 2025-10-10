import React, { useEffect, useState } from 'react'

export function useMouse(){
    const [move, setMove] = useState({x:0,y:0})


    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>setMove({x: e.clientX, y:e.clientY}));
        return ()=>{
            window.removeEventListener('mousemove',(e)=>setMove({x: e.clientX, y:e.clientY}))
        }
    },[])

    return move
}