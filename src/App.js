import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createHashHistory';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import configureStore from './store';

import Main from './components/main';

const store = configureStore();
const history = createBrowserHistory();

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#172b4d',
  //   },
  //   background: {
  //     paper: 'rgb(232, 234, 236)',
  //   },
  // },
});
theme.shadows[2] = 'none';

export default () => (
  <Provider store={store}>
    <ConnectedRouter store={store} history={history}>
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);
