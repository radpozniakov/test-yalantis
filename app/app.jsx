import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//Components
import MainContainer from 'MainContainer';
import CardsList from 'CardsList';
import AdminPage from 'AdminPage';

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <Route path="/images" component={CardsList}/>
        <Route path="/admin" component={AdminPage}/>
        <IndexRoute component={CardsList}/>
      </Route>
    </Router>,
  document.getElementById('app')
);
