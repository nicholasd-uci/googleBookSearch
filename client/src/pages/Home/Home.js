// need to bring in State Mtg && Functions //
import React, { useState } from 'react'
import API from '../../utils/API'

const Home = () => {

const [ bookState, setBookState] = useState({
    search: '',
    book: []
})

    bookState.handleInputChange = event => {
        setBookState({ ...bookState, [event.target.name]: event.target.value })
    }

    bookState.handleSearchGoogle = event => {
        event.preventDefault()
        API.getBook(bookState.search)
        .then(({ data }) => {
            setBookState({ ...bookState, book: data, search: ''})
        })
        .catch(err => console.log(err))
    }

    bookState.handleSaveBook = googleID => {
        const saveBook = bookState.book.filter(x => x.googleID !== googleID)[0]
        API.saveBook(saveBook)
            .then(() => {
                const book = bookState.book.filter(x => x.googleID !== googleID)
                setBookState({ ...bookState, book })
        })
    }


    return(
        <>
        <hr />

            <h1>Books Check 'em Out</h1>
            <form>
                <p>
                    <label htmlFor="search">Search</label>
                    <input type="text" name="search" />
                </p>
                <p>
                    <h3>Search Books</h3>
                    <button onClick={bookState.handleSearchGoogle}>Google Book Search Here</button>
                </p>
                <p>
                    Thanks for using our page!
                </p>
            </form>
        </>
    )
}

export default Home