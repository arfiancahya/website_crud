import { combineReducers } from 'redux';
import Post from './reducer_post';
import File from './reducer_file';
import { reducer as formReducer } from 'redux-form'

export default combineReducers ({
    Post,
    File,
    form: formReducer
})