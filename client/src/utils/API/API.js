import axios from 'axios'

const API = {
  getBook: search => axios.get(`/api/book/${search}`),
  getSaveBook: () => axios.get('/api/book'),
  saveBook: media => axios.post('/api/book', media),
  deleteBook: id => axios.delete(`/api/book/${id}`)
}

export default API