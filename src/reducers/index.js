import PostsReducer from './PostsReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    "posts":PostsReducer
});

export default rootReducer;
