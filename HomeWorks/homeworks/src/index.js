import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import storeHW7 from './components/HomeWork7/store/taskStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeHW7}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
