import {  Route, Routes } from "react-router-dom"
import Card from "./pages/card"
import Detail_card from "./pages/Detail_card"


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Card/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/Card/:id" element={<Detail_card/>}/>
      
    </Routes>
  
  )
}

export default App
