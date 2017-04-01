import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/App';
import store from 'store';

const target = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  target
);

if (module.hot) {
  module.hot.accept('containers/App', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('containers/App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NewApp />
        </Provider>
      </AppContainer>,
      target
    );
  });
}
