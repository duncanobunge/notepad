import React from 'react';
import { Link } from 'react-router-dom';
import note from '../pages/NotesPage';

const ListItem = ({note}) => {
    
  return (
    <Link to={'/note/${note.id}'}>
       <p>{note.title}</p>
    </Link>
  );
}

export default ListItem;
