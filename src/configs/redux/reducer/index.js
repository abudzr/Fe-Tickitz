import { combineReducers } from 'redux'
import movieReducer from './movie'
import showtimesReducer from './showtimes'
import userReducer from './user'
import orderReducer from './order'

const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    showtimes: showtimesReducer,
    order: orderReducer
})

export default rootReducer