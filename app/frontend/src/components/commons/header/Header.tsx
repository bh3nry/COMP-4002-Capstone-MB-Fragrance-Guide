import './header-style.css'
import { NavLink } from 'react-router-dom';
import fragrance_img from '../../../assets/fragrance.png'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { useForm } from '../../../hooks/useForm';

function Header() {

    const { outOfTries } = useForm();

    return (
        <header className="header">
            <NavLink to="/" className="divcss">
                <img src={fragrance_img} alt="fragrance logo" className='fragimg' />
                <h1 className="h1header">The Fragrance Group</h1>
            </NavLink>
            <nav className="topnav">
                <ul className="liststyle">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="notes"> Notes </NavLink>
                    <NavLink to="profile"> Profile </NavLink>
                </ul>

                {/* shows sign in button when logged out, user button when logged in */}
                {!outOfTries &&
                <>
                    <SignedOut>
                        <SignInButton mode="modal" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </> 
                }
            </nav>
        </header>
    );
}
export default Header;
 