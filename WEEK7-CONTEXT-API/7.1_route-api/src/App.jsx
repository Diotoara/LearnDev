import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import {Dashboard} from './components/dashboard'
import {Landing} from './components/landing'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Navbar(){
  const navigate = useNavigate()
  return(
    <div>
      <span style={{marginLeft:5,}} >
      <button onClick={()=>{
        navigate('/')
      }} >Landing</button>
      </span>
      
      <span style={{marginLeft:20,}} >
      <button onClick={() => {
        navigate('/dashboard')
      }} >Dashboard</button>
      </span>
    </div>
  )
}

export default App
