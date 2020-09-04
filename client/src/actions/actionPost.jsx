import axios from 'axios';

export const GET_POST_LIST = 'GET_POST_LIST';
export const GET_POST_DETAIL = 'GET_POST_DETAIL';

export const getPostList = () => {
    return (dispatch) => {
        axios.get("/api/post/order")
            .then(function (result) {
                dispatch({
                    type: GET_POST_LIST,
                    payload: {
                        data: result.data.data
                    }
                });
            });
    };
};

export const getPostId = (id) => {
    return (dispatch) => {
        axios.get(`/api/post/${id}`)
            .then(function (result) {
                dispatch({
                    type: GET_POST_DETAIL,
                    payload: {
                        data: result.data.data
                    }
                });
            });
    };
};

export const deletePostId = () => {
    return (dispatch) => {
        dispatch({
            type: GET_POST_DETAIL,
            payload: {
                data: false
            }
        });
    };
};