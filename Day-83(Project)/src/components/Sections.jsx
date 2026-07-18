import { useContext } from "react"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import { themeDataContext } from "../context/ThemeContext"



const Sections = () => {
  const [theme, setTheme] = useContext(themeDataContext)
  return (
    <div className="sec">
      <Section1 />
      {theme}
      <Section2 />
    </div>
  )
}

export default Sections