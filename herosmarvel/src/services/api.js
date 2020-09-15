import axios from 'axios'

const api = axios.create({
    baseURL: 'https://gateway.marvel.com',
  params: {
    ts: '1',
    apikey: 'ccc16fcf4e95b1360a33dceee971a22d',
    hash: '0ed0084bdd4d399cc3d275c6bd3af38c',
  }
})

export default api;