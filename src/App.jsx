import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Landing from "./pages/Landing"
import Home from "./pages/Home"
import About from "./pages/About"
import Progress from "./pages/Progress"

function App(){

const [theme,setTheme] = useState("dark")

const toggleTheme = ()=>{

setTheme(theme==="dark" ? "light" : "dark")

document.body.className = theme==="dark" ? "light" : "dark"

}

return(

<>

<Header toggleTheme={toggleTheme} theme={theme}/>

<Routes>

<Route path="/" element={<Landing/>} />

<Route path="/home" element={<Home/>} />

<Route path="/about" element={<About/>} />

<Route path="/progress" element={<Progress/>} />

</Routes>

<Footer/>

</>

)

}

export default App