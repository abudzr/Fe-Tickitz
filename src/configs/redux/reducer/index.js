import { combineReducers } from 'redux'
// import filmReducer from './film'
// import historyReducer from './history'
import userReducer from './user'
// import postReducer from './post'

const rootReducer = combineReducers({
    user: userReducer
    //   film: filmReducer,
    //   history: historyReducer,
    //   post: postReducer
})

export default rootReducer