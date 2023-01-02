import React from 'react';
import notes from '../assets/data';

const NotesPage = ({match}) => {
    let noteId= match.params.id
    let note = notes.find(note=>note.id === Number(noteId))
    return (
    <div>
       <p>{note.title}</p>
       <p>{note.body}</p>
       <p>{note.updated}</p>
    </div>
  );
}

export default NotesPage;
