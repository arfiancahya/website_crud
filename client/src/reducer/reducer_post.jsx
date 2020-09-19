import {
    GET_POST_LIST,
    GET_POST_DETAIL,
    GET_POST_NEW,
    GET_PUT_POST,
    SEARCH_POST,
} from '../actions/actionPost';



const initialState = {
    posts: [],
    search: '',
    isUpdate: false,
    authors: "Arfian Cahya"
}

const Post = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_LIST:
            return {
                ...state,
                posts: action.payload.data
            };

        case GET_POST_DETAIL:
            return {
                ...state,
                posts: action.payload.data
            };

        case GET_POST_NEW:
            return {
                ...state,
                posts: action.payload.data
            };

        case GET_PUT_POST:
            return {
                ...state,
                posts: action.payload.data
            };

        case SEARCH_POST:
            return {
                ...state,
                search: action.payload
            };

        default:
            return state;
    }

}

export default Post;
