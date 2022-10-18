import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Context */
import CartContext from './context/CartContext';
import SearchContext from './context/SearchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchContext>
    <CartContext>
      <App />
    </CartContext>
  </SearchContext>
);
