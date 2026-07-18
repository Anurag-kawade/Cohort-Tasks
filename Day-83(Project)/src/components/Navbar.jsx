import { useContext } from "react";
import { UserData } from "../context/ThemeContext";
import { themeDataContext } from "../context/ThemeContext";

const Navbar = () => {

  const nav_data = useContext(UserData);
  const [theme, setTheme] = useContext(themeDataContext)

  return <div className="nav">Navbar - {nav_data} 
 <div>{theme}</div>
  <button onClick={()=>{
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }}>Change</button>
  </div>;
};

export default Navbar;
