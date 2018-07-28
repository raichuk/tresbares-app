import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default App;
