import { useContext } from "react";
import { Data } from "../context/UserContext";

const Header = () => {

  let header = useContext(Data)

  return (
    <div className="h-40 bg-red-600 text-4xl p-5 flex flex-row justify-center items-center">
      {header.headerData.title}
    </div>
  );
};

export default Header;
