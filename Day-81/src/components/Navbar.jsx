import { useState } from "react";
const Navbar = (props) => {
  const [text, setText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(text);
          setText("");
        }}
      >
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          value={text}
          placeholder="Enter the theme"
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default Navbar;
