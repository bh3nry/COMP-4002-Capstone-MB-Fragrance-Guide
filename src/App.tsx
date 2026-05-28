import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import Favourites from './components/pages/Favourites'
import Profile from './components/pages/Profile'
import './App.css'


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
  );
}

export default App