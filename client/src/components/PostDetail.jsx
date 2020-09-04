import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class PostDetail extends Component {
    render() {
        return (
            <Fragment>
            <h1>{this.props.posts.title}</h1>
            <p>{this.props.posts.description}</p>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.Post.posts,
        authors: state.Post.authors
    }
}

export default connect(mapStateToProps, null)(PostDetail);
