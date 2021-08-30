import axios from 'axios'

const api = axios.create({
    baseURL: 'https://aa-blog-wagtail.herokuapp.com/api/pages/',
})

export default api