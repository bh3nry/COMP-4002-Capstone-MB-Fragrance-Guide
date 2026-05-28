import './header-style.css'
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
                    <li><a href="home">Home</a></li>
                    <li><a href="favourites">Favourites</a></li>
                    <li><a href="profile">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;