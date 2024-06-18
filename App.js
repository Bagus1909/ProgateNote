import React, { useState } from "react"
import Home from "./src/screens/Home"
import AddNote from "./src/screens/AddNote"
import EditNote from "./src/screens/EditNote"

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  setCurrentNote,
  currentNote,
  deleteNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setCurrentNote={setCurrentNote}
          deleteNote={deleteNote}
        />
      )
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case "edit":
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} currentNote={currentNote} />
    default:
      return <Home />
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note Pertama",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, dolor.",
    },
  ])
  const [currentNote, setCurrentNote] = useState(null)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

  const editNote = (id, updatedTitle, updatedDesc) => {
    const updatedNotes = noteList.map(note =>
      note.id === id ? { ...noteList, title: updatedTitle, desc: updatedDesc } : note
    )
    setNoteList(updatedNotes)
  }

  const deleteNote = id => {
    const updatedNotes = noteList.filter(note => note.id !== id)
    setNoteList(updatedNotes)
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      setCurrentNote={setCurrentNote}
      currentNote={currentNote}
    />
  )
}
