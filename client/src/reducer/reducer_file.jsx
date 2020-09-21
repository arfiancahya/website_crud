import {
    GET_FILE_LIST, GET_FILE_NEW,
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
            case GET_FILE_NEW:
                return {
                    ...state,
                    files: action.payload.data
                };
        default:
            return state;
    }
}

export default File;