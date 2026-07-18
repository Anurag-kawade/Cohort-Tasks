import { useContext } from "react"
import { themeDataContext } from "../context/ThemeContext"

const Footer = () => {
  const [theme, setTheme] = useContext(themeDataContext)
  return (
    <div className="foot">Footer
    <p>{theme}</p>
    </div>
  )
}

export default Footer