"use client"

import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [messages,setMessages] = useState(["hi there :)","acha lwde","abe chal"])
  const [currMessage, setCurrMessage] = useState("");
  const wsRef = useRef<WebSocket | null>(null);
  const bottomRef = useRef<HTMLDivElement  | null>(null)

  useEffect(() =>{
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    ws.onmessage=(event)=>{
      setMessages(m => [...m,event.data])
    }
    wsRef.current = ws

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type : "join",
        payload : {
          roomId : "aryan"
        }
      }))
    }
    return () => {
      ws.close();
    }
  },[])

  const sendMessage = () => {
    if (!currMessage.trim()) return;
    wsRef.current?.send(JSON.stringify({
      type : "chat",
      payload : {
        message : currMessage
      }
    }))
    setCurrMessage("")
  }

  return (
    <div className="h-screen bg-black " >
      <div className="h-[88vh] overflow-y-auto text-white p-8" >
        <h1 className="flex justify-center text-4xl font-semibold hover:text-purple-400 " >CHAT APP</h1>
        <div className="mt-6 space-y-5 px-14">
          {messages.map((e,key)=>(
            <div key={key} ref={bottomRef} className="bg-white text-black w-fit px-3 py-2 rounded-lg rounded-tl-none" >{e}</div>
          ))}
        </div>
      </div>

      <div className="bg-white flex mx-14 rounded-2xl">

        <input 
        type="text" 
        className="flex-1 p-4  outline-none" 
        placeholder="Type a message.." 
        value={currMessage}
        onChange={(e)=>{
          setCurrMessage(e.target.value)
        }}
        onKeyDown={(e)=>{
          if(e.key === "Enter"){
            sendMessage();
          }
        }} />

        <button 
        className="bg-purple-600 rounded-2xl rounded-l-none hover:cursor-pointer text-white p-4" 
        onClick={sendMessage}>Send Message</button>

      </div>
    </div>
  );
}
