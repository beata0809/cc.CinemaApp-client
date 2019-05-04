import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from '../../views/Main';
import Reservation from '../../views/Reservation';
import GlobalStyle from '../styles/GlobalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/reservation" component={Reservation} />
      </Router>
    </Fragment>
  );
};

export default App;
