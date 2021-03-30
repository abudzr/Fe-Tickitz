const initialState = {
    user: {
        idUsers: null,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        reset: ''
    },
    loading: false,
    error: ''
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                },
                loading: false
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "RESET_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "RESET_SUCCESS":
            return {
                ...state,
                loading: false,
            };
        case "RESET_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
}
export default userReducer