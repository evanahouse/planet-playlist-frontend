import React from 'react'

export default function TrackCard({ track, playlist }) {
    return (
        <div className="track-card">
            <img src={track.image}></img>
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <iframe src={`https://embed.spotify.com?uri=spotify:playlist:${playlist.spotify_id}`} width="300" height="380" frameborder="0" allowtransparency="true"></iframe>        </div>
    )
}
