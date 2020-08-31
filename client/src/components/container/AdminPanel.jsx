import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pages from "../post/Pages";
import Table from '../post/Table';
import Post from '../post/Post';

const formPos ={
    id: "",
    title: "",
    description: ""
};

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            formPos,
            isUpdate: false
        }
    }

    getBaru() {
        axios.get("/api/post/order")
            .then((result) => {
                //console.log(result.data.data);
                this.setState({
                posts: result.data.data,
                formPos
            })
        })
    }

    posData = () => {
        axios.post("/api/post", this.state.formPos)
            .then((result) => {
                console.log(result);
                this.getBaru();
            }, (err) => {
                console.log("eror", err);
            })
    }

    putData = () => {
        axios.put(`/api/post/${this.state.formPos.id}`, this.state.formPos)
            .then((result) => {
                this.getBaru();
                this.setState({
                    isUpdate: false,
                    formPos
                })
            })
    }

    handlePos = () => {
        if(this.state.isUpdate) {
            this.putData();
        } else {
            this.posData();
        }
    }

    componentDidMount() {
        this.getBaru();
    }
    

    handleEdit = (data) => {
        console.log(data);
        this.setState ({
            formPos: data,
            isUpdate: true
        })
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
        if(!this.state.isUpdate) {
            formPosNew["id"] = timestamp;
        }
        formPosNew[event.target.name] = event.target.value;
        this.setState ({
            formPos: formPosNew
        }, () => {
            //console.log(this.state.formPos);
        })
    }

    
    
    
    render() {
        return (
            <Fragment>
                <h1> Hallo Semua </h1>
                <Post form={this.handleForm} publish={this.handlePos} update={this.state.formPos} />
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
