import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { cryptoApi } from './services/cryptoApi';
import { newsApi } from './services/newsApi';
import { coinDetailsApi } from './services/coinDetailsApi';
const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath] : cryptoApi.reducer,
    [newsApi.reducerPath] : newsApi.reducer,
    [coinDetailsApi.reducerPath] : coinDetailsApi.reducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <App />
      </Provider>
    </BrowserRouter>

    
  </React.StrictMode>
);


