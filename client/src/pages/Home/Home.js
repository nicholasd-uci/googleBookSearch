// need to bring in State Mtg && Functions //
import React, { useState } from 'react'

const Home = () => {

const [ bookState, setBookState] = useState({
    search: '',
    media: []
})

    bookState.handleInputChange = event => {
        setBookState({ ...bookState, [event.target.name]: event.target.value })
    }

    bookState.handleSearchGoogle = event => {
        event.preventDefault()
    }

    return(
        <>
            <h1>Books Check 'em Out</h1>
            <h3>Search Books</h3>
            <form>
                <p>
                    <label htmlFor="search">Search</label>
                    <input type="text" name="search" />
                </p>
                <p>
                    <button onClick={bookState.handleSearchGoogle}>Google Book Search Here</button>
                </p>
                <p>
                    Thanks for using our page <3!
                </p>
            </form>
        </>
    )
}

export default Home