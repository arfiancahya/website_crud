import {
    GET_FILE_LIST,
} from '../actions/actionFile';

const initialState = {
    files: [],
}

const File = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILE_LIST:
            return {
                ...state,
                files: action.payload.data
            };
        default:
            return state;
    }
}

export default File;