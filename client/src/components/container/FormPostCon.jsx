import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deletePosNew, getPostNew } from '../../actions/actionPost';
import FormPost from '../FormPost';

class FormPostCon extends Component {
    handleSubmit(data) {
        this.props.dispatch(getPostNew(data));
        this.props.dispatch(deletePosNew());
    }


    render() {
        return (
            <Fragment>
                <h1>Create Post</h1>
                <p>Dashboard - Create Post</p>
                <FormPost onSubmit={(data) => this.handleSubmit(data)} />
            </Fragment>
        );
    }
}

export default connect()(FormPostCon);
