import React from 'react'
import SideBar from '../components/SideBar'
import Home from '../components/Home'
import Search from '../components/Search'
import Reviews from '../components/Reviews'
import ShowPlaylist from '../components/ShowPlaylist'
import { useState, useEffect, Fragment } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { newReview, getProfile, getTracks } from '../services/auth'



export default function Main({ match, history }) {
   const [username, setUsername] = useState("")
   const [reviews, setReviews] = useState([])
   const [view, setView] = useState('home')
   const [searchResults, setSearchResults] = useState([])
   const [playlist, setPlaylist] = useState({})
   const [tracks, setTracks] = useState([])



    useEffect(() => {
        getProfile()
        .then(data => initializeUser(data))
	}, [])
    
    useEffect(() => {
        getProfile()
        .then(data => initializeUser(data))
	}, [sessionStorage.getItem('view')])

    const initializeUser = (data) => {
        setUsername(data.user.username)
        if (data.user.reviews){
            setReviews(data.user.reviews)
        }
    }

    const submitReview = (e, review, playlist ) => {
        e.preventDefault()
        let body = JSON.stringify({ review: {spotify_id: playlist.spotify_id, content: review}})
        newReview(body)
        .then(data => newReview(data))
    }
    
    const more = (playlist) => {
        setPlaylist(playlist)
        getTracks(playlist.spotify_id)
        .then(tracks => setTracks(tracks))
        history.push("/playlist")
    }

    const searchProps = {searchResults, setSearchResults, playlist, setPlaylist, submitReview, more}

    return (
        <div className="main-container">
            <SideBar />
            <Switch>
                <Route 
                    path="/reviews"
                    render={routerProps => <Reviews {...routerProps} reviews={reviews}/>} 
                />
                <Route 
                    path="/search"
                    render={routerProps => <Search {...routerProps} {...searchProps}/>}
                />
                <Route 
                    path="/playlist"
                    render={routerProps => <ShowPlaylist playlist={playlist} tracks={tracks} {...routerProps} />}
                />
                <Route 
                    path="/"
                    render={routerProps => <Home {...routerProps}/>}
                />
            </Switch>
    
        </div>
    )
}
