import axios from 'axios';

export const GET_FILE_LIST = 'GET_FILE_LIST';

export const getFileList = () => {
    return (dispatch) => {
        axios.get("/api/file/list")
            .then(function (result) {
                console.log(result);
                dispatch({
                    type: GET_FILE_LIST,
                    payload: {
                        data: result.data.data
                    }
                });
            });
    };
};