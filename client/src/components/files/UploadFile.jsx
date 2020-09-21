import React, { Component } from 'react';
import axios from 'axios';

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state ={
            files: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('uploadfile',this.state.files);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/file/upload",formData,config)
            .then((response) => {
                console.log(response);
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({files:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="uploadfile" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default UploadFile;
