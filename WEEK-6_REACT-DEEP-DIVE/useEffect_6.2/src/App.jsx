import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function onClick() {
    console.log("child clicked")
  }

  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({fnc}) => {
  console.log("child render")

  return <div>
    <button onClick={fnc}>Button clicked</button>
  </div>
})

export default App;