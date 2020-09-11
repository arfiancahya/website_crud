import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { getPostNew, deletePostId } from '../../actions/actionPost';
import FormPost from '../FormPost';
import { getPostId, deletePostId, getEditPost } from '../../actions/actionPost';

class EditPostCon extends Component {

    componentDidMount() {
        this.props.dispatch(getPostId(this.props.match.params.id));
        this.props.dispatch(deletePostId());
    }
    handleSubmit(data) {
        this.props.dispatch(getEditPost(data, this.props.match.params.id));
        this.props.dispatch(deletePostId());
    }

    render() {
        return (
            <Fragment>
                <FormPost onSubmit={(data) => this.handleSubmit(data)}/>
            </Fragment>
        );
    }
}

export default connect()(EditPostCon);
