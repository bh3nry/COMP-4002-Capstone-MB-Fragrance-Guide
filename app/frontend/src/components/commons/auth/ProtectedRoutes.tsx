import { Outlet } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react"
import SignInGateKeeper from "./SignInGateKeeper"

import React from "react"

const ProtectedRoutes = (): React.JSX.Element => {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) return <div>Loading...</div>
  if (!isSignedIn) return <SignInGateKeeper />

  return <Outlet />
}

export default ProtectedRoutes
