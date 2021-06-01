import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation({ loggedIn, logOut }) {
    return (
        <div className="navigation">
            {loggedIn == false ? 
                    <div className="nav-link-logged-out">
                        <NavLink to="/login" className="nav-link" >Sign In</NavLink> 
                        <NavLink to="/register" className="nav-link">Sign Up</NavLink>
                    </div> :
                    <div className="nav-link-logged-in">
                        <NavLink to="/login" className="nav-link" onClick={logOut}>Sign Out</NavLink>
                    </div>}
        </div>
    )
}

