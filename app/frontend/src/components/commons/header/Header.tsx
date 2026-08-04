 
import './header-style.css'
import { NavLink, useLocation } from 'react-router-dom';

import fragrance_img from '../../../assets/fragrance.png'
import { SearchBar } from '../searchbar/SearchBar'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function Header() {
    const location = useLocation()
    console.log(location)
    return (
        <header className="header">
            <NavLink to="/" className="divcss">
                <img src={fragrance_img} alt="fragrance logo" className='fragimg' />
                <h1 className="h1header">The Fragrance Group</h1>
            </NavLink>
            { location.pathname !== "/notes"
                ? null 
                : <SearchBar onSearch={
                    (query) => console.log("query:", query)
                } />
            }
            <nav className="topnav">
                <ul className="liststyle">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="notes"> Notes </NavLink>
                    <NavLink to="profile"> Profile </NavLink>
                    {/* <NavLink to="profile/favourites"> Favourites </NavLink> */}
                </ul>

                {/* shows sign in button when logged out, user button when logged in */}
                <SignedOut>
                    <SignInButton mode="modal" />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </nav>
        </header>
    );
}
export default Header;
 