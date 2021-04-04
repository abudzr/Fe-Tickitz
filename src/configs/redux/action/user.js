import axios from 'axios'

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
                dispatch(loginFailure('password salah'))
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