import React, { useState } from 'react'
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

    
    return(
        <>
        <h1>This is your saved Books</h1>
        {
            savedState.saved.length > 0 ? (
                savedState.saved.map(book => (
                    <div>
                        
                    </div>
                ))
            ) : null
        }
        </>
    )
}

export default Saved