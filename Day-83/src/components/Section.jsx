import { useContext } from "react";
import { Data } from "../context/UserContext";


const Section = () => {
  let sec_Data = useContext(Data)

  return (
    <div className="h-90 bg-emerald-800 text-4xl p-5 flex flex-row justify-center items-center">
      {sec_Data.sectionData.headline}
    </div>
  );
};

export default Section;
