import axios from 'axios'

axios.interceptors.request.use(request => {
    request.baseURL = 'https://arsini.github.io/api/'
    return request
})

axios.interceptors.response.use(response => {
    return response.data
})