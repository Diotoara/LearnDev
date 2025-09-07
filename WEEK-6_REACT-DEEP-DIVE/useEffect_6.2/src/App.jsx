import { memo, useCallback, useState } from "react";

function App() {

  // const logi = useCallback(() => {
  //   console.log("popo")
  // },[])

  function logi () {
    console.log("new fnctn")
  }


  const Button = memo( ({fncn}) => {
    console.log("only work when something changes")

    return(
      <button>click on me</button>
    )
  })


  return(
    <>
      <Button fncn={logi}></Button>
    </>
  )  
}

export default App;