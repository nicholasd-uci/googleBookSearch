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
        const saveBook = bookState.book.filter(x => x.googleID === googleID)[0]
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
                    <input 
                        type="text" 
                        name="search"
                        value={bookState.search}
                        onChange={bookState.handleSearchGoogle} />
                </p>
                <p>
                    <h3>Search Books</h3>
                    <button onClick={bookState.handleSearchGoogle}>Google Book Search Here</button>
                </p>
                <p>
                    Thanks for using our page!
                </p>
            </form>
            {
                bookState.book.length > 0 ? (
                    bookState.book.map(book => (
                        <div key={book.googleID}>
                            <img src={book.image} alt={book.title} />
                            <h3>Author: {book.author}</h3>
                            <h3>Plot:   {book.description}</h3>
                            <h3>Link:   {book.link}</h3>
                            {/* below is a function declaration */}
                            <button onClick={() => bookState.handleSaveBook(book.googleID)}>SAVE</button>
                        </div>
                    ))
                ) : null
            }
        </>
    )
}

export default Home