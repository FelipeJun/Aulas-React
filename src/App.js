import Login from './components/login';
import Home from './home';
import './App.css';
import React from 'react';

function App() {
  const [login, setLogin] = React.useState();
  return (
    <div className="App">
      {login? <Home login={login} setLogin={setLogin}/> : <Login setLogin={setLogin}/>}
    </div>
  );
}

export default App;
