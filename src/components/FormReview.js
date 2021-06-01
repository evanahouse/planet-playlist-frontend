import React from 'react'
import { useState, useEffect } from "react";


export default function FormReview({ playlist, showForm, setShowForm, submitReview }) {
    const [review, setReview] = useState("")
    
    useEffect(() => {
		setReview("")
	}, [showForm])

    if (!showForm){
        return null
    }

    const handleSubmit = (e, review, playlist) => {
        submitReview(e, review, playlist)
        setShowForm(false)
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Review Form</h4>
                    <div className="modal-footer">
                        <button className="button" onClick={() => setShowForm(false)}>X</button>
                    </div>
                </div>
                <div className="modal-body">
                    {playlist.name}
                </div>
                <form onSubmit={(e) => handleSubmit(e, review, playlist)} className="modal-form" autoComplete="off">
                    <input
                    type="textarea"
                    cols="30"
                    rows="10"
                    name="review"
                    placeholder="Leave a Review"
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                    />
                    <input type="submit"   value="Submit Review" />
                </form>
            </div>    
        </div>
    )
}
