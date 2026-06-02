import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import './App.css'
import { Layout } from "./components/commons/layout/Layout"
import FavouritesPage from './components/pages/Favourites'
// import Header from './components/common/header/Header'
// import NoteDisplay from './components/notes/noteList'
import { ScentNotes } from './components/notes/notes-data'
import type {Notes} from './components/notes/notes-data'
 


const App = () => {

  const [scents, updateNotes] = useState<Notes[]>(ScentNotes);

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path="favourites" element={<FavouritesPage scents={scents} updateNotes={updateNotes}/>}/>
          </Route>
      </Routes>
  );
}

export default App