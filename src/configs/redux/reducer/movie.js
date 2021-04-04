const initialState = {
    movie: [],
    errorMsg: ''
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_MOVIE': {
            return {
                ...state,
                movie: action.payload
            }
        }
        case 'LIST_ALL_MOVIE': {
            return {
                ...state,
                movie: action.payload
            }
        }
        case 'DETAIL_MOVIE': {
            return {
                ...state,
                movie: action.payload
            }
        }
        case 'CREATE_MOVIE': {
            return {
                ...state,
                movie: action.payload
            }
        }
        case 'EDIT_MOVIE': {
            return {
                ...state,
                movie: action.payload
            }
        }
        case 'DELETE_MOVIE': {
            return {
                ...state,
                movie: action.payload
            }
        }
        case 'SET_MESSAGE_MOVIE': {
            return {
                ...state,
                errorMsg: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default movieReducer