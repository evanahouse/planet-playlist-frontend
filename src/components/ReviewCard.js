import React from 'react'

export default function ReviewCard({ review }) {
    return (
        <div className="review-card-container">
            <p>{review.updated_at}</p>
            <p>{review.content}</p>
            <img src={review.playlist.img_url} className="card-image"></img>
            <h3 className="card-name">{review.playlist.name}</h3>
            {/* <p className="card-description">{review.description}</p> */}
            <p className="card-owner">By {review.playlist.owner}</p>
        </div>
    )
}
