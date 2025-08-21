import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function addf(){
    setCount( count + 1 )
  }
  return (
    <div>
        <button onClick={addf} > Counter : {count}</button>
        <button onClick={addf} > Counter2 : {count+10}</button>
    </div>
  )
}

export default App
