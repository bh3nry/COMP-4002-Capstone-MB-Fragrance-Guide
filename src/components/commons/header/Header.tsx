 
import './header-style.css'
import { NavLink } from 'react-router-dom';

import fragrance_img from '../../../assets/fragrance.png'
import { SearchBar } from '../searchbar/SearchBar'

function Header() {
    return (
        <header className="header">
            <div className="divcss">
                <img src={fragrance_img} alt="fragrance logo" className='fragimg' />
                <h1 className="h1header">The Fragrance Group</h1>
            </div>
            <SearchBar onSearch={(query) => console.log("query:", query)} />
            <nav className="topnav">
                <ul className="liststyle">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="profile"> Profile </NavLink>
                    <NavLink to="profile/favourites"> Favourites </NavLink>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
 