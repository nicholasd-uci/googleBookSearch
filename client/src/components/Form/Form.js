import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const Form = () => {

  const {
    search,
    handleInputChange,
    handleSearchGoogle
  } = useContext(BookContext)

  return (
    <form onSubmit={handleSearchGoogle}>
      <TextField 
        label="Search" 
        variant="outlined" 
        name="search"
        value={search}
        onChange={handleInputChange} />
      <p>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={handleSearchGoogle}
        >
          Search
      </Button>
      </p>
    </form>
  )
}

export default Form