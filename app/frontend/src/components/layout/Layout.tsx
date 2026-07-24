import { Outlet } from "react-router-dom"
import Header from "../commons/header/Header"
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"

const Layout = () => {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;