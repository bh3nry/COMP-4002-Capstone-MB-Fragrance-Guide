import { SignInButton } from '@clerk/clerk-react'
import "./signin.css"

const SignInGateKeeper = () => {    
    return (
        <div className='sign-in-wrapper'>
            <h1>Sign In to continue finding fragrances</h1>
            <SignInButton mode="modal">
                <button className="gatekeeper-sign-in">Sign In</button>
            </SignInButton>
        </div>
    )
}

export default SignInGateKeeper