import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Post from "../post/Post";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getBaru();
    }
    
    getBaru() {
        axios.get("/api/post")
            .then((result) => {
                console.log(result.data.data);
                this.setState({
                posts: result.data.data
            })
        })
    }
    
    render() {
        return (
            <Fragment>
                <h1> Hallo Semua </h1>
                {
                    this.state.posts.map(posts => {
                        
                        return <Post key={posts.id} title={posts.title} body={posts.description} />
                    })
                }
                
            </Fragment>
        );
    }
}

export default AdminPanel;
