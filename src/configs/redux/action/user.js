import axios from 'axios'
import jwt from "jwt-decode";
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
                resolve(dataUser)
            })
            .catch((err) => {
                console.log(err);
                dispatch(loginFailure('wrong password'))
                reject(reject)
            })
    })
}

export const reset = (reset, { password }) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axios
            .put(`${Url}users/password-reset?reset=${reset}`, {
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

export const getUserByid = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        const decoded = jwt(token);
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance.get(`${Url}/users/${decoded.idUsers}`).then((res) => {
            dispatch({
                type: "GET_USER",
                payload: res.data.data[0],
                role: res.data.data[0].role,
            });
        });
    };
};