import { combineReducers } from 'redux'
import movieReducer from './movie'
import userReducer from './user'

const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer
})

export default rootReducer