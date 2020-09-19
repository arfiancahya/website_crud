import React, { Component, Fragment } from 'react';


class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    };
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    componentDidMount() {
        this.getFile();
    }
    
    getFile(){
        fetch('/api/file/list')
        .then((res) => res.json())
        .then((data) => {
            const base64Flag = 'data:image/jpg;base64,';
            for(let i = 0; i < data.data.length; i++){
                const read = data.data[i].data.data;
            
            const imageStr = this.arrayBufferToBase64(read);
            console.log(read);
            this.setState({
                image: base64Flag + imageStr
            })
            }
        })
    }

    render() {
        const {image} = this.state;
        return (
            <Fragment>
            {
                this.state.files.map(files => {
                    return <img key={files.id} src={files.data} alt='nyoba' />
                })
            }
                <img 
                    src = {image}
                    alt = 'Aku nih' />
            </Fragment>
        );
    }
}

export default Image;
