import React from 'react';
import notes from '../assets/data';
import ListItem from '../components/ListItem';


const NoteListPages = () => {
  return (
    <div>
      <div className='notes-list'>
         {notes.map((note,index) =>(
            <ListItem key={index} note={note} />
         ))}
      </div>
    </div>
  );
}
export default NoteListPages;
