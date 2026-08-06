import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/commons/auth/ProtectedRoutes'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import Notes from './components/pages/NotesList'
import FavouritesPage from './components/pages/FavouritesPage'
import Profile from './components/pages/Profile'
import React from 'react'

import './App.css'
import { FormProvider } from './hooks/formContext'
import { NoteProfilePage } from './components/pages/NoteProfile'

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
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
              <Route element={<ProtectedRoutes />}>
               <Route path='notes' element={<Notes />} />
                <Route path='notes/:noteId' element={<NoteProfilePage />} />
                <Route path="favourites" element={<FavouritesPage />}/>
              </Route> 
              <Route path='profile'>
              <Route index element={<Profile />} />

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App