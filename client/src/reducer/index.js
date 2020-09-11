import { combineReducers } from 'redux';
import Post from './reducer_post';
import { reducer as formReducer } from 'redux-form'

export default combineReducers ({
    Post,
    form: formReducer
})