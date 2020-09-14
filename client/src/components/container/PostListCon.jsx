import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { getPostList } from '../../actions/actionPost';
import PostList from '../PostList';

class HomepagesCon extends Component {
    // componentDidMount() {
    //     this.props.dispatch(getPostList());
    // }

    render() {
        return (
            <Fragment>
                <h1>Post List</h1>
                <p>Dashboard - Post List</p>
                <PostList  />
            </Fragment>
        );
    }
}

export default connect()(HomepagesCon);
