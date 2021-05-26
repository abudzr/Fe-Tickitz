import axiosApiInstance from '../../../helper/axios'

export const listMovie = (search, page, sort, order) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .get(`${Url}movies?search=${search || ''}&page=${page || 1}&sort=${sort || 'id'}&order=${order || 'ASC'}`)
            .then((res) => {
                dispatch({ type: 'LIST_MOVIE', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                dispatch({ type: 'SET_MESSAGE_MOVIE', payload: err.response.data.message });
            });
    });
};

export const listAllMovie = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .get(`${Url}movies/allMovies`)
            .then((res) => {
                dispatch({ type: 'LIST_ALL_MOVIE', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                dispatch({ type: 'SET_MESSAGE_MOVIE', payload: err.response.data.message });
            });
    });
};

export const detailMovie = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .get(`${Url}movies/${id}`)
            .then((res) => {
                dispatch({ type: 'DETAIL_MOVIE', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                dispatch({ type: 'SET_MESSAGE_MOVIE', payload: err.response.data.message });
            });
    });
};

export const detailMovieGenre = (id) => {
    return (dispatch) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance.get(`${Url}movies/detailGenre/${id}`)
            .then((res) => {
                dispatch({ type: 'DETAIL_MOVIE_GENRE', payload: res.data.data });
            });
    };
};

export const createMovie = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .post(`${Url}movies`, data)
            .then((res) => {
                dispatch({ type: 'CREATE_MOVIE', payload: res.data.data });
                resolve(res);
            })
            .catch((err) => {
                dispatch({ type: 'SET_MESSAGE_MOVIE', payload: err.response.data.message });
            });
    });
};

export const createCinemas = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .post(`${Url}showTimes`, data)
            .then((res) => {
                // dispatch({ type: 'CREATE_MOVIE', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                reject(err)
                // dispatch({ type: 'SET_MESSAGE_MOVIE', payload: err.response.data.message });
            });
    });
};

export const editMovie = (id, data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .patch(`${Url}movies/${id}`, data)
            .then((res) => {
                dispatch({ type: 'EDIT_MOVIE', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                dispatch({ type: 'SET_MESSAGE_MOVIE', payload: err.response.data.message });
            });
    });
};

export const deleteMovie = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.REACT_APP_API_RESTAPI;
        axiosApiInstance
            .delete(`${Url}movies/${id}`)
            .then((res) => {
                dispatch({ type: 'DELETE_MOVIE', payload: res.data.data });
                resolve(res.data.data);
            })
            .catch((err) => {
                dispatch({ type: 'SET_MESSAGE_MOVIE', payload: err.response.data.message });
            });
    });
};
