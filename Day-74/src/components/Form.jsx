import { useState } from "react";
import Card from "./Card";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [allInfo, setAllInfo] = useState([]);

  function submitHandler(dets) {
    dets.preventDefault();

    const newUser = { name: name, email: email };

    setAllInfo([...allInfo, newUser]);

    setName("");
    setEmail("");
  }

  return (
    <div>
      <form
        onSubmit={(dets) => {
          submitHandler(dets);
        }}
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter your name here:"
          required
          value={name}
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter your Email here:"
          required
          value={email}
        />
        <button id="btn" type="submit">
          Submit
        </button>
      </form>
      <div className="card-container">
        {allInfo.map((dets, idx) => {
          return <Card name={dets.name} email={dets.email} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Form;
