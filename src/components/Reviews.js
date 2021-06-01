import React from 'react'
import ReviewCard from './ReviewCard'

export default function Reviews({ reviews }) {
    console.log("rendering reviews")
    
    return (
        <div className="reviews-container">
            {reviews.map(review => <ReviewCard key={review.spotify_id} review={review}/>)}        
        </div>
    )
}
