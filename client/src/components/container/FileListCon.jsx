import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFileList } from '../../actions/actionFile';
import FilelList from '../files/FilelList';


class FileListCon extends Component {
    componentDidMount() {
        this.props.dispatch(getFileList());
    }

    render() {
        return (
            <Fragment>
                <h1>Files List</h1>
                <p>Dashboard - Files List</p>
                <FilelList />
            </Fragment>
        );
    }
}

export default connect()(FileListCon);
