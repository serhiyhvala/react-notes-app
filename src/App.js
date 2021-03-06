import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App =() => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/04/2022"
    },
  ]);

  useEffect(()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    
    if(savedNotes){
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() =>{
    localStorage.setItem(
        'react-notes-app-data', 
        JSON.stringify(notes)
      );
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes =  [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = () => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return(
    <div className="container">
      <NotesList 
          notes={notes} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App;