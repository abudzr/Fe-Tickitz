import axios from 'axios'
const { REACT_APP_API_RESTAPI: API_URL } = process.env

const http = (token = null) => {
    // const token = localStorage.getItem('token')

    const headers = token && {
        authorization: `Bearer ${token}`
    }
    return axios.create({
        baseURL: API_URL,
        headers
    })
}

export default http