import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setName] = useState("");
  const [userImage, setImage] = useState("");
  const [userDesignation, setDesignation] = useState("");
  const [userDescription, setDescription] = useState("");

  const localData = JSON.parse(localStorage.getItem("all-users")) || [];

  const [allUsers, setAllUsers] = useState(localData);

  const submitHandler = (dets) => {
    dets.preventDefault();

    const oldUsers = [...allUsers];
    oldUsers.push({ userName, userImage, userDesignation, userDescription });
    setAllUsers(oldUsers);
    localStorage.setItem("all-users", JSON.stringify(oldUsers));

    setName("");
    setImage("");
    setDesignation("");
    setDescription("");
  };

  const deleteHandler = (idx) => {
    let copyAllUsers = [...allUsers];
    let conf = confirm("Do You Want to Delete it?");

    if (conf) {
      copyAllUsers.splice(idx, 1);
    }else{
      alert('User not deleted')
    }

    setAllUsers(copyAllUsers);
    localStorage.setItem("all-users", JSON.stringify(copyAllUsers));
  };

  return (
    <div className="h-screen w-screen bg-[#FBC02D] overflow-auto">
      <form
        onSubmit={(dets) => {
          submitHandler(dets);
        }}
        className="text-white px-5 py-2 bg-amber-700"
      >
        <input
          required
          value={userName}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="bg-[#FF8F00] w-[48%] m-2 p-1 rounded border-0 outline-none text-xl"
          type="text"
          placeholder="Enter your name"
        />
        <input
          required
          value={userImage}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          className="bg-[#FF8F00] w-[48%] m-2 p-1 rounded border-0 outline-none text-xl"
          type="text"
          placeholder="Enter Image URL"
        />
        <input
          required
          value={userDesignation}
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
          className="bg-[#FF8F00] w-[48%] m-2 p-1 rounded border-0 outline-none text-xl"
          type="text"
          placeholder="Designation"
        />
        <input
          required
          value={userDescription}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-[#FF8F00] w-[48%] m-2 p-1 rounded border-0 outline-none text-xl"
          type="text"
          placeholder="Enter Description"
        />
        <button
          type="submit"
          className="w-[97%]  m-2 my-4 bg-emerald-700 h-[6%] text-2xl active:scale-99"
        >
          Create
        </button>
      </form>

      <div className="p-5 flex gap-4 flex-wrap">
        {allUsers.map(function (elem, idx) {
          return <Card elem={elem} idx={idx} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
