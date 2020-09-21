import axios from 'axios';

export const GET_FILE_LIST = 'GET_FILE_LIST';
export const GET_FILE_NEW = 'GET_FILE_NEW';

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

export const uploadFiles = (data) => {
    return (dispatch) => {
        const formData = new FormData();
        formData.append('uploadfile', data);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/file/upload", data, formData,config)
        .then(function (result) {
            console.log(result);
            dispatch({
                type: GET_FILE_NEW,
                payload: {
                    data: result.data.data
                }
            });
        });
    };
};