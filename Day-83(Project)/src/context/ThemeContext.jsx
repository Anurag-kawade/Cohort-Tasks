import { createContext } from "react";
import { useState } from "react";

export const UserData = createContext();
export const themeDataContext = createContext();


const ThemeContext = ({ children }) => {
  const user = "Anurag";

  const [theme, setTheme] = useState("light");

  return (
    <div>
      <UserData.Provider value={user}>
        <themeDataContext.Provider value={[theme, setTheme]}>
          {children}
        </themeDataContext.Provider>
      </UserData.Provider>
    </div>
  );
};

export default ThemeContext;
