import React from 'react';

function Login(props){
  const [usuario, setUsuario] = React.useState();
  const [senha, setSenha] = React.useState();

  function verificaLogin(){
    if(usuario === "ola" && senha === "123")
    props.setLogin({nome:'Jun'})
    else
    alert("Login Inválido")

  }
  return(
  <div className='login'>
    Usuário: <input type="text" className='usuarioLogin' onChange={(e) => setUsuario(e.target.value)} />
    Senha: <input type="password" className="senhaLogin" onChange={(e) => setSenha(e.target.value)} />
    <div className='btnLogin'>
      <button onClick={verificaLogin}>Login</button>
    </div>
  </div>
  )
}

export default Login;