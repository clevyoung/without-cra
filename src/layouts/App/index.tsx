import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" />
    </Switch>
  );
};

export default App;
