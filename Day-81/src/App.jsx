import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState('Light')

  const changeTheme = (val)=>{
    setTheme(val)
  }

  return (
    <div className="display">
      <h1>Theme is {theme}</h1>
      <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App