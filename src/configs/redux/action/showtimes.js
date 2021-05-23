import axiosApiInstance from '../../../helper/axios'

export const listShowtime = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .post(`${Url}showtimes/searchLocation`, data)
            .then((res) => {
                dispatch({ type: 'LIST_SHOWTIMES', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                reject(err)
                dispatch({ type: 'SET_MESSAGE_SHOWTIMES', payload: err.response.data.message });
            });
    });
};

export const createTransaction = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .post(`${Url}transactions`, data)
            .then((res) => {
                dispatch({ type: 'CREATE_TRANSACTION', payload: res.data });
                resolve(res.data);
            })
            .catch((err) => {
                reject(err)
                dispatch({ type: 'SET_MESSAGE_TRANSACTION', payload: err.response.data.message });
            });
    });
};

export const getListTransaction = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .get(`${Url}transactions/orderHistory/${id}`)
            .then((res) => {
                dispatch({ type: 'GET_LIST_TRANSACTION', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                reject(err)
                dispatch({ type: 'SET_MESSAGE_TRANSACTION', payload: err.response.data.message });
            });
    });
};
