import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
window.onbeforeunload = function() {
  return "Data will be lost if you leave the page, are you sure?";
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

