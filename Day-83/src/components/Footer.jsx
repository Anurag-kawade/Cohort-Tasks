import { useContext } from "react";
import { Data } from "../context/UserContext";

const Footer = () => {
  let footer_Data = useContext(Data)

  return (
    <div className="h-43  bg-yellow-700 text-4xl p-5 flex flex-row justify-center items-center">
      {footer_Data.footerData.copyrightYear}
    </div>
  );
};

export default Footer;
