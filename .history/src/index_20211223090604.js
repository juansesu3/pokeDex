import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRouter from './routes/AppRouter';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <AppRouter/>
    
   </React.StrictMode>,
  document.getElementById('root')
);
