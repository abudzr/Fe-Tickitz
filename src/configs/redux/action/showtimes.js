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