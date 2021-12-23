import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRouter from './routes/AppRouter';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter/>
    </Provider>
   </React.StrictMode>,
  document.getElementById('root')
);
