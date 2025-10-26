import React from "react";
import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-800">No Notes Yet</p>;
  }

  return (
    <>
      <div className="space-y-4">
        {notes.map((note) => {
          return <Note key={note.id} note={note} deleteNote={deleteNote} />;
        })}
      </div>
    </>
  );
};

export default NoteList;
