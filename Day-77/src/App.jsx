import Card from "./components/Card";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  const dataHandler = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    setAllUsers(response.data);

    console.log(allUsers);
  };

  return (
    <div className="bg-black h-screen w-screen text-white p-4 flex flex-row gap-3 items-center flex-wrap">
      <div className="w-full h-fit flex flex-row  justify-center">
        <button
          onClick={dataHandler}
          className="bg-green-600 rounded px-2 py-2 active:scale-95  text-xl w-26"
          type="submit"
        >
          Get Data
        </button>
      </div>
      {allUsers.map((elem, idx) => {
        return <Card elem={elem} idx={idx} />;
      })}
    </div>
  );
};

export default App;
