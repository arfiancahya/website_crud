import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostDetailCon from './components/container/PostDetailCon';
import FormPostCon from './components/container/FormPostCon';
import EditPostCon from './components/container/EditPostCon';
import PostListCon from './components/container/PostListCon';




class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={PostListCon} />
            <Route path="/create" exact component={FormPostCon} />
            <Route path="/detail/:id" exact component={PostDetailCon} />
            <Route path="/edit/:id" exact component={EditPostCon} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;