import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<any>([])

  useEffect(()=>{
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("connected")
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log("received message : ", message);
      setMessages((m:any)=>[...m, message.data])
    }
  },[])

  if(!socket){
    return(
      <div>
        connecting to WebSocket server...
      </div>
    )
  }

  return (
    <div>
      {messages.map((msg:any, index:number) => (
        <div key={index}>
          {msg}
        </div>
      ))}
    </div>
  )
}

export default App
