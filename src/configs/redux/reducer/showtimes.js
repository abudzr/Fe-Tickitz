const initialState = {
    showtimes: [],
    order: [],
    transaction: [],
    errorMsg: ''
}

const showtimesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_SHOWTIMES': {
            return {
                ...state,
                showtimes: action.payload
            }
        }
        case 'SET_MESSAGE_SHOWTIMES': {
            return {
                ...state,
                errorMsg: action.payload
            }
        }
        case 'ADD_ORDER': {
            return {
                ...state,
                order: action.payload
            }
        }
        case 'GET_LIST_TRANSACTION': {
            return {
                ...state,
                transaction: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default showtimesReducer