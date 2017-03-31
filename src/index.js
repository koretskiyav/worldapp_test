import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/App';

const target = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  target
);

if (module.hot) {
  module.hot.accept('containers/App', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('containers/App').default;
    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      target
    );
  });
}
