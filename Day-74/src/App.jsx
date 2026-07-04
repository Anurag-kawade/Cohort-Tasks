import { useState } from "react";

// form handling
const App = () => {
  // function submitHandler(dets){
  //   console.log('submission');
  //   dets.preventDefault();
  // }

  const [name, setName] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  return (
    <div>
      <form
        onSubmit={(dets) => {
          dets.preventDefault();
          // console.log(name);
          setName(""); // After submiting now the input area will be blank

          allUsers.push(name);
          setAllUsers([...allUsers]);

          console.log(allUsers);
        }}
      >
        <input
          type="text"
          placeholder="Enter here"
          // value = 'anu'  hardcoded value , we can't change this

          value={name}
          onChange={(e) => {
            setName(e.target.value); //now react interacts with the website
          }}
          required // now u cant submit it in a blank way , comp kuch toh likhna hoga waise submit nahi hoga
        />
        <button type="submit">Submit</button>
      </form>

      {allUsers.map((elem) => {
        return <h1>{elem}</h1>;
      })}
    </div>
  );
};

export default App;
