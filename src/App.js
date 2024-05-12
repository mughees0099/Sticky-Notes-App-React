import "./App.css";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const topic = e.target[0].value;
    const note = e.target[1].value;
    setNotes([...notes, { topic, note }]);
    setShowInput(false);
  };

  const handleDelete = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Sticky Notes App</h1>
      <button onClick={handleClick}>+Add Note</button>
      {showInput && (
        <form onSubmit={handleSubmit}>
          <div className="add-note">
            <label>Topic:</label>
            <input type="text" placeholder="Enter topic" required />
          </div>
          <div className="add-note">
            <label>Note:</label>
            <textarea placeholder="Enter note" required></textarea>
          </div>
          <button>Add</button>
        </form>
      )}
      <div className="sticky-note">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h2>{note.topic}</h2>
            <p>{note.note}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
