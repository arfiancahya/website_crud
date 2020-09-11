import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPostNew, deletePostId } from '../../actions/actionPost';
import FormPost from '../FormPost';

class FormPostCon extends Component {
    handleSubmit(data) {
        this.props.dispatch(getPostNew(data));
        this.props.dispatch(deletePostId());
    }

    render() {
        return (
            <Fragment>
                <FormPost onSubmit={(data) => this.handleSubmit(data)} />
            </Fragment>
        );
    }
}

export default connect()(FormPostCon);
