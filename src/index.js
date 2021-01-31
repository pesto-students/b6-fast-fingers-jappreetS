import React from 'react';
import ReactDOM from 'react-dom';

import { DictionaryProvider } from './context/DictionaryContext';
import App from './containers';

ReactDOM.render(
  <React.StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
