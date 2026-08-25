import { useState, useEffect, useRef } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [highlightForm, setHighlightForm] = useState(false);

  const formRef = useRef(null);
  const titleInputRef = useRef(null);

  function fetchNotes() {
    axios.get("http://localhost:3000/notes").then((res) => {
      setNotes(res.data.note);
    });
  }

  function handleEdit(note) {
    setEditId(note._id);
    setTitle(note.title);
    setDescription(note.description);

    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    titleInputRef.current?.focus();

    setHighlightForm(true);
    setTimeout(() => setHighlightForm(false), 1200);
  }

  function handleCancelEdit() {
    setEditId(null);
    setTitle("");
    setDescription("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      // Backend PATCH now accepts both title and description.
      // Whatever is currently in the fields is sent as-is — an emptied
      // field is saved as blank, no validation blocking it.
      axios
        .patch(`http://localhost:3000/notes/${editId}`, {
          title: title,
          description: description,
        })
        .then((res) => {
          console.log(res.data);
          fetchNotes();
          handleCancelEdit();
        })
        .catch((err) => console.error(err));
    } else {
      // Create note expects both title and description
      if (!title.trim() || !description.trim()) {
        console.warn("blank");
        return;
      }

      axios
        .post("http://localhost:3000/notes", {
          title: title,
          description: description,
        })
        .then((res) => {
          console.log(res.data);
          fetchNotes();
          setTitle("");
          setDescription("");
        })
        .catch((err) => console.error(err));
    }
  }

  function handleDeleteNote(nodeId) {
    axios
      .delete(`http://localhost:3000/notes/${nodeId}`)
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <form
        className={`note-form${highlightForm ? " note-form--highlight" : ""}`}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <input
          ref={titleInputRef}
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{editId ? "Update Note" : "Create Note"}</button>
        {editId && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note" key={note._id}>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <br />
              <button className="edit-btn" onClick={() => handleEdit(note)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteNote(note._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;