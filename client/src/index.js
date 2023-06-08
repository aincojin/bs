import {React, createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals';
import{ BrowserRouter } from 'react-router-dom'
import UserStore from './store/UserStore';
import MusicStore from './store/MusicStore';
import CartStore from './store/CartStore';
import GenreStore from './store/GenreStore';


export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user:new UserStore(),
    music: new MusicStore(),
    genretrack: new GenreStore(),
    cart: new CartStore()
  }}>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  </Context.Provider>
);

// reportWebVitals();
