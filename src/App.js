
import{
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
//import Body from './components/Body';
import NoteListPages from './pages/NoteListPages';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route  path='/' exact component={NoteListPages} />
        <Route  path='/note/:id' component={NotesPage} /> 
     </div>
    </Router>
    
  );
}

export default App;
