import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostDetailCon from './components/container/PostDetailCon';
import FormPostCon from './components/container/FormPostCon';
import EditPostCon from './components/container/EditPostCon';
import PostListCon from './components/container/PostListCon';
import FileListCon from './components/container/FileListCon';
import Image from './components/files/Image';
import UploadFile from './components/files/UploadFile';




class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/post-list" exact component={PostListCon} />
            <Route path="/create" exact component={FormPostCon} />
            <Route path="/post-list/:id" exact component={PostDetailCon} />
            <Route path="/edit/:id" exact component={EditPostCon} />
            <Route path='/files' exact component={FileListCon} />
            <Route path='/list' exact component={Image} />
            <Route path="/upload" exact component={UploadFile} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;