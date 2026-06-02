 
import './header-style.css'
import { NavLink } from 'react-router-dom';
import fragrance_img from '../../../assets/fragrance.png'

function Header() {
    return (
        <header className="header">
            <div className="divcss">
                <img src={fragrance_img} alt="fragrance logo" className='fragimg' />
                <h1 className="h1header">The Fragrance Group</h1>
            </div>
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
 