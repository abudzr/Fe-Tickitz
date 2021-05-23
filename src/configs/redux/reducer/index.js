import { combineReducers } from 'redux'
import movieReducer from './movie'
import showtimesReducer from './showtimes'
import userReducer from './user'

const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer,
    showtimes: showtimesReducer
})

export default rootReducer