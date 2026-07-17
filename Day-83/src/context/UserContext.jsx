import { createContext } from "react";

/* eslint-disable react-refresh/only-export-components */
export const Data = createContext()


const UserContext = ({ children }) => {
  const layoutData = {
    headerData: {
      title: "My Creative App",
    },
    sectionData: {
      headline: "Build Something Amazing",
    },
    footerData: {
      copyrightYear: 2026,
    },
  };
  return <div>
    <Data.Provider value={layoutData}>
    {children}
    </Data.Provider>
    </div>;
};

export default UserContext;
