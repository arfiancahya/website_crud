import { 
    GET_POST_LIST, 
    GET_POST_DETAIL 
} from '../actions/actionPost';

const form = {
    id: "",
    title: "",
    description: ""
}

const initialState = {
    posts: [],
    form,
    isUpdate: false,
    authors: "Arfian Cahya"
}

const Post = (state = initialState, action) => {
    switch(action.type) {
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

            default:
                return state;
    }

}

export default Post;
