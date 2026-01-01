import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [messages, setMessages] = useState<any>([])
  const [sendText, setSendText] = useState<string>("")

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

    return ()=> {
      socket.close()
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
      <div>
        <input type="text" onChange={(e)=>setSendText(e.target.value)} />
        <button onClick={()=>{
          socket.send(sendText)
        }} >Send</button>
      </div>

      <div>
      {messages.map((msg:any, index:number) => (
        <div key={index}>
          {msg}
        </div>
      ))}
      </div>
    </div>
  )
}

export default App
