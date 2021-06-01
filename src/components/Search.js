import React from 'react'
import { useState } from 'react'
import { search } from '../services/auth'
import PlaylistCard from './PlaylistCard'
import FormReview from './FormReview'

export default function Search({ submitReview, searchResults, setSearchResults, playlist, setPlaylist, more, history }) {
    const [searchParams, setSearchParams] = useState('')
    const [showForm, setShowForm] = useState(false)
    
    let body = JSON.stringify({search: searchParams})

    const submitSearch = (e) => {
        e.preventDefault()
        search(body)
        .then(data => setSearchResults(data))
    }

    const leaveReview = (playlist) => {
        setPlaylist(playlist)
        setShowForm(true)
    }

    

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={submitSearch} autoComplete="off">  
                <input
                    type="text"
                    name="search"
                    placeholder="Search Playlists"
                    value={searchParams}
                    onChange={(event) => setSearchParams(event.target.value)}
                />
                <input type="submit" hidden={true} value="Search" />
            </form>
            <FormReview showForm={showForm} setShowForm={setShowForm} playlist={playlist} submitReview={submitReview}/>
            <div className="search-showcase">
                    {searchResults.map(playlist => {
                        return <PlaylistCard key={playlist.spotify_id} playlist={playlist} leaveReview={leaveReview} more={more} />
                    })}
            </div>
        </div>
    )
}
