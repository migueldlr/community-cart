import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderScreen from './screens/OrderScreen';
import SelectCartScreen from './screens/SelectCartScreen';
import theme from './theme';
import 'typeface-inter';
import 'typeface-roboto';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={SelectCartScreen} />
          <Route exact path="/order" component={OrderScreen} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
