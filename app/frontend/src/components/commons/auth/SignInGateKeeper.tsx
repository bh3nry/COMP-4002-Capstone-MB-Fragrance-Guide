import { SignInButton } from '@clerk/clerk-react'
import "./signin.css"

const SignInGateKeeper = () => {    
    return (
        <div className='sign-in-wrapper'>
            <h1>Sign In to continue finding fragrances</h1>
            <SignInButton className="gatekeeper-sign-in" mode="modal" />
        </div>
    )
}

export default SignInGateKeeper