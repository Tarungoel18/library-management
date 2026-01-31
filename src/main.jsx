import "bootstrap/dist/css/bootstrap.css"; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
createRoot(document.getElementById('root')).render(
  <Router>
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
  </Router>,
)
