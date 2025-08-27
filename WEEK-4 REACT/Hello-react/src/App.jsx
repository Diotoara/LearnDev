import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title : "wake at 6am",
    description : "freshen up and active till 6:30",
    done : true},
    {title : "DSA",
    description : "DSA from 6:30 to 9 AM",
    done : false
  }])


  return (
    <div>
      <EachTodo title = {todos[0].title} description = {todos[0].description}></EachTodo>
      <br />
      <EachTodo title = {todos[1].title} description = {todos[1].description}></EachTodo>
    </div>
  ) 
}
  function EachTodo(prop){
    return (
      <div>
        <div>{prop.title}</div>
        <div>{prop.description}</div>
      </div>
    )
  }

export default App
