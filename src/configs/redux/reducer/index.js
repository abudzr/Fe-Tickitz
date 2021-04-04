import { combineReducers } from 'redux'
// import cinemaReducer from './cinema'
// import movieReducer from './movie'
// import orderReducer from './order'
import userReducer from './user'

const rootReducer = combineReducers({
    user: userReducer
    // cinema: cinemaReducer,
    // movie: movieReducer,
    // order: orderReducer
})

export default rootReducer