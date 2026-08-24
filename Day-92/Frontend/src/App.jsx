import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([
    {
      title: "test title 1",
      description: "test description 1",
    },
    {
      title: "test title 2",
      description: "test description 2",
    },
    {
      title: "test title 3",
      description: "test description 3",
    },
    {
      title: "test title 4",
      description: "test description 4",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/notes")
      .then((res) => {
        setNotes(res.data.note);
      });
  }, []);

  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <div className="note" key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;