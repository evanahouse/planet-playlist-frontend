import React from 'react'

export default function PlaylistCard({ playlist, leaveReview, more }) {
    return (
        <div className="card-container">
            <img src={playlist.img_url} className="card-image"></img>
            <h3 className="card-name">{playlist.name}</h3>
            {/* <p className="card-description">{playlist.description}</p> */}
            <p className="card-owner">By {playlist.owner}</p>
            <div className="button-area">
                <button onClick={() => leaveReview(playlist)} className="review-btn">Review</button>
                <button onClick={() => more(playlist)} className="more-btn">More</button>
            </div>
            
        </div>
    )
}
