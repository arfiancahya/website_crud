import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pages from "../post/Pages";
import Table from '../post/Table';
import Post from '../post/Post';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            formPos: {
                id: " ",
                title: " ",
                description: " "
            }
        }
    }

    handleEdit = (data) => {
        console.log(data);
    }

    handleRemove = (data) => {
        axios.delete(`/api/post/${data}`)
        .then((result) => {
            this.getBaru();
        })
    }

    handleForm = (event) => {
        let formPosNew = {...this.state.formPos};
        let timestamp = new Date().getTime();
        formPosNew["id"] = timestamp;
        formPosNew[event.target.name] = event.target.value;
        this.setState ({
            formPos: formPosNew
        }, () => {
            console.log(this.state.formPos);
        })
    }

    handlePos = () => {
        console.log(this.state.formPos);
    }

    componentDidMount() {
        this.getBaru();
    }
    
    getBaru() {
        axios.get("/api/post")
            .then((result) => {
                //console.log(result.data.data);
                this.setState({
                posts: result.data.data
            })
        })
    }
    
    render() {
        return (
            <Fragment>
                <h1> Hallo Semua </h1>
                <Post form={this.handleForm} publish={this.handlePos} />
                <Table />
                {
                    this.state.posts.map(posts => {
                        
                        return <Pages key={posts.id} data={posts} remove={this.handleRemove} edit={this.handleEdit} />
                    })
                }
                
            </Fragment>
        );
    }
}

export default AdminPanel;
