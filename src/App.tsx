<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import Favourites from './components/pages/Favourites'
import Profile from './components/pages/Profile'

=======
import ProductCard from './components/ProductCard/ProductCard'
import { testPerfume } from './components/ProductCard/product-data-test'
import SearchBar from './components/searchbar/SearchBar' 
import NoteTable from './components/notes/noteList'
import { ScentNotes } from './components/notes/notes-data'
=======
import Favourites from './components/commons/favourites/Favourite'
>>>>>>> afb8043 (feat: implement favourites functionality and update note display)
import Header from './components/commons/header/Header'
 
>>>>>>> 0b54b2d (feat: refactored noteList function to map notes-data object and renamed images in assets for notes.)
import './App.css'
import { FormProvider } from './hooks/formContext'

/**
 * @component App
 * @description Main component defining the global route structure.
 * All routes are nested inside `<Layout />` with a shared Header/Nav element.
 * 
 * * ### Routes:
 * - `/` Renders `Home` inside Layout
 * - `/profile` Renders `Profile` inside Layout
 * - `/profile/favourites` Renders `Favourites` inside Layout
 * * @returns {React.JSX.Element} The rendered application with routing.
 */
const App = (): React.JSX.Element => {
  return (
<<<<<<< HEAD
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='profile'>
              <Route index element={<Profile />} />
              <Route path="favourites" element={<Favourites />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </FormProvider>
=======
    <>
      <Header />
      <Favourites />
    </>
>>>>>>> 0b54b2d (feat: refactored noteList function to map notes-data object and renamed images in assets for notes.)
  );
}

export default App