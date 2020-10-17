import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Order from './screens/Order';
import SelectCart from './screens/SelectCart';
import theme from './theme';
import 'typeface-inter';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={SelectCart} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
