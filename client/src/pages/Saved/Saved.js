import React, { useEffect, useState } from 'react'
import API from '../../utils/API'

const Saved = () => {

const [savedState, setSavedState] = useState({
    saved: []
}) 

savedState.handleDeleteSaved = id => {
    API.deleteBook(id)
        .then(() => {
            let saved = savedState.saved.filter(book => book._id !== id)
            setSavedState({ ...savedState, saved })
        })
    }

    useEffect(() => {
        API.getSaveBook()
        .then(({ data }) => {
            setSavedState({ ...savedState, saved: data })
        })
    }, [])

    return(
        <>
        <h1>This is your saved Books</h1>
        {
            savedState.saved.length > 0 ? (
                savedState.saved.map(book => (
                <div key={book.googleID}>
                    <img src={book.image} alt={book.title} />
                    <h3>{book.title}</h3>
                    <h3>Author: {book.author}</h3>
                    <h3>Plot: {book.description}</h3>
                    <h3>Book Link: {book.link}</h3> 
                    <button onClick={() => savedState.handleDeleteSaved(book._id)}>Delete This Book</button>
                </div>
                ))
            ) : null
        }
        </>
    )
}

export default Saved