import React from 'react'
import TrackCard from './TrackCard'

export default function ShowPlaylist({ playlist, tracks }) {
    return (
        <div className="playlist-container">
            {/* <div className="track-container">
            {tracks.map(track => <TrackCard key={track.id} track={track} />)}        
            </div> */}
            <div className="playlist-image">
                <img src={playlist.img_url} />
                <h3>{playlist.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: playlist.description.replace(/href/g, "target='_blank' href") }}></p>
                <p>By {playlist.owner}</p>
            </div>
            <div className="playlist-card">
                <iframe src={`https://embed.spotify.com?uri=spotify:playlist:${playlist.spotify_id}`}  frameborder="0" allowtransparency="true" view="coverart" allow="encrypted-media" ></iframe>
            </div>
            <div className="forum-container">
                <button className="comment-button">Write a comment</button>
            </div>
        </div>
    )
}
