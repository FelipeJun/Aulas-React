
import Login from './components/login';
import Home from './components/home'
import {UsuarioContext} from './usuarioContext';
import {usuarios} from './data/usuarios'
import { useState } from 'react';

function App() {
  const [logado, setLogado] = useState();
  return (
    <div>
      <UsuarioContext.Provider value={usuarios}>
        {logado? <Home logado={logado} setLogado={setLogado}/> : <Login setLogado={setLogado}/>}     
      </UsuarioContext.Provider>
    </div>
  );
}

export default App;
