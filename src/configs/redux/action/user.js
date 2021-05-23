import axios from 'axios'
// import jwt from "jwt-decode";
import axiosApiInstance from '../../../helper/axios'

const loginRequest = () => {
    return { type: 'LOGIN_REQUEST' }
}
const loginSuccess = (dataUser) => {
    return { type: 'LOGIN_SUCCESS', payload: dataUser }
}
const loginFailure = (error) => {
    return { type: 'LOGIN_FAILURE', payload: error }
}

export const signUp = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axios.post(`${Url}users/register`, data)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export const login = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(loginRequest())
        const Url = process.env.REACT_APP_API_RESTAPI;
        axios.post(`${Url}users/login`, data)
            .then((res) => {
                const dataUser = res.data.data
                // dispatch({ type: 'LOGIN', payload: dataUser })
                dispatch(loginSuccess(dataUser))
                localStorage.setItem('token', dataUser.token)
                localStorage.setItem('id', dataUser.idUsers)
                resolve(dataUser)
            })
            .catch((err) => {
                console.log(err);
                dispatch(loginFailure('wrong password'))
                reject(reject)
            })
    })
}

export const reset = (email, token, { password }) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axios
            .put(`${Url}users/password-reset?email=${email}&token=${token}`, {
                password,
            })
            .then((res) => {
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
    });
};

export const getUserByid = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .get(`${Url}users/${id}`)
            .then((res) => {
                dispatch({ type: 'GET_USERBYID', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
    });
};
