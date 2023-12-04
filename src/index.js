import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Note that Component identifier has Camel casing notion
function MyFirstComponent() {
  return <h1>Hello World</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyFirstComponent />
    <App />
  </React.StrictMode>
);

