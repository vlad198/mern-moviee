import React from 'react';
import './App.css';
import Start from './Start';
import AuthState from './contexts/AuthContext/AuthState';
import setToken from './utils/setToken';
import MovieState from './contexts/MovieContext/MovieState';

if (localStorage.token) {
  setToken(localStorage.token);
}


function App() {
  return (
    <div className="App">
      <AuthState>
        <MovieState>
          <Start />
        </MovieState>
      </AuthState>
    </div>
  );
}

export default App;
