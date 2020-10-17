import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from './components/Button';
import SelectCart from './screens/SelectCart';
import theme from './theme';
import 'typeface-inter';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={SelectCart} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
