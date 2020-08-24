import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Post from "../post/Post";
import Table from '../post/Table';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    handleRemove = (data) => {
        axios.delete(`/api/post/${data}`)
        .then((result) => {
            this.getBaru();
        })
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
                <Table />
                {
                    this.state.posts.map(posts => {
                        
                        return <Post key={posts.id} data={posts} remove={this.handleRemove} />
                    })
                }
                
            </Fragment>
        );
    }
}

export default AdminPanel;
