import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import initState, { LOCAL_STORAGE_KEY } from './redux/store';

const store = createStore(
  rootReducer,
  initState(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(store.getState())
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
