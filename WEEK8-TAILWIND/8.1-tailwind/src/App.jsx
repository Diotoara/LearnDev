import React from "react"
import { RevenueCard } from "./components/RevenueCard"
import { div } from "motion/react-client"

function App() {

  return (
    <div className="grid grid-cols-4" >
        <RevenueCard text={"Amount Pending"} amount={"$10,000"} order={13} ></RevenueCard>
    </div>
  )
}

export default App
