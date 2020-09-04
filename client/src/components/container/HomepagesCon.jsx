import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPostList } from '../../actions/actionPost';
import PostList from '../PostList';

class HomepagesCon extends Component {
    componentDidMount() {
        this.props.dispatch(getPostList());
    }

    render() {
        return (
            <Fragment>
                <h1>Hallo</h1>
                <PostList />
            </Fragment>
        );
    }
}

export default connect()(HomepagesCon);
