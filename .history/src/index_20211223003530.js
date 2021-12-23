import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';


ReactDOM.render(
  <React.StrictMode>
    <App/>
    <AppRouter/>,
   </React.StrictMode>,
  document.getElementById('root')
);
