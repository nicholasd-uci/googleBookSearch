import React, { createContext } from 'react'

const BookContext = createContext({
  search: '',
  book: [],
  handleInputChange: () => { },
  handleSearchgoogle: () => { },
  handleSaveBook: () => { }
})

export default BookContext