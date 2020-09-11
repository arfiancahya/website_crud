import axios from 'axios';

export const GET_POST_LIST = 'GET_POST_LIST';
export const GET_POST_DETAIL = 'GET_POST_DETAIL';
export const GET_POST_NEW = 'GET_POST_NEW';
export const GET_PUT_POST = 'GET_PUT_POST';
export const GET_POST_DELETE = 'GET_POST_DELETE';

export const getPostList = () => {
    return (dispatch) => {
        axios.get("/api/post/order")
            .then(function (result) {
                console.log(result);
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
                console.log(result);
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

export const getPostNew = (data) => {
    return (dispatch) => {
        axios.post("/api/post", data)
            .then(function (result) {
                console.log(result);
                dispatch({
                    type: GET_POST_NEW,
                    payload: {
                        data: result.data.data
                    }
                });
            });
    };
};

export const getEditPost = (data, id) => {
    return (dispatch) => {
        axios.put(`/api/post/${id}`, data)
            .then(function (result) {
                console.log(result);
                dispatch({
                    type: GET_PUT_POST,
                    payload: {
                        data: result.data.data
                    }
                });
            });
    };
};

export const getDeletPost = (id) => {
    return (dispatch) => {
        axios.delete(`/api/post/${id}`)
            .then(function (result) {
                console.log(result);
                // dispatch({
                //     type: GET_POST_DELETE,
                //     payload: {
                //         data: result.data.data
                //     }
                // });
            });
    };
};