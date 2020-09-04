import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPostId, deletePostId } from '../../actions/actionPost';
import PostDetail from '../PostDetail';

class PostDetailCon extends Component {
    componentDidMount() {
        this.props.dispatch(getPostId(this.props.match.params.id));
        this.props.dispatch(deletePostId());
    }
    render() {
        console.log(this.props);
        return (
            <Fragment>
                <h1>Post Details {this.props.match.params.id}</h1>
                <PostDetail />
            </Fragment>
        );
    }
}

export default connect()(PostDetailCon);
