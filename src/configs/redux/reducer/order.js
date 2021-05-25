const initialState = {
    order: [],
    errorMsg: ''
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return {
                ...state,
                order: action.payload
            }

        default: {
            return state
        }
    }
}

export default orderReducer