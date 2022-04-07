import { useState } from "react";
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
  return(
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;