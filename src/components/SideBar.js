import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SideBar({ match }) {
    useEffect(() => {
        
    }, [sessionStorage.getItem('view')])
    
    return (
        <div className="sidebar-container">
            <h3>Planet Playlist</h3>
            <Link to="/" onClick={() => sessionStorage.setItem('view', '')} exact className={`sidebar-link ${window.location.pathname.substr(1,) === "" ? "active" : ""}`}>Home</Link>
            <Link to="/search" exact onClick={() => sessionStorage.setItem('view', 'search')} className={`sidebar-link ${window.location.pathname.substr(1,) === "search" ? "active" : ""}`}>Search</Link>
            <Link to="/reviews" exact onClick={() => sessionStorage.setItem('view', 'reviews')} className={`sidebar-link ${window.location.pathname.substr(1,) === "reviews" ? "active" : ""}`}>Your Comments</Link>
            
        </div>
    )
}
