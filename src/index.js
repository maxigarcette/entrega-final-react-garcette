import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './contexts/CartContext'

const firebaseConfig = {
  apiKey: "AIzaSyC1SZw-1ghn7aakxObP9Hyv-D7SDDkLS1Y",
  authDomain: "entrega-final-react-garcette.firebaseapp.com",
  projectId: "entrega-final-react-garcette",
  storageBucket: "entrega-final-react-garcette.appspot.com",
  messagingSenderId: "786234248037",
  appId: "1:786234248037:web:43a223f1c67abc749eef8c"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

