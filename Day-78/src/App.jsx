// useEffect -> kisi bhi kam/task ko sidestack mai karne ke liye

import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(function () {
    const getData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setAllUsers(response.data);
    };

    getData();
  }, []);
  return (
    <div className="bg-[#333] h-screen w-screen p-4 flex gap-4 flex-wrap">
      {allUsers.map(function (elem, idx) {
        return <Card key={idx} user={elem} />;
      })}
    </div>
  );
};

export default App;
