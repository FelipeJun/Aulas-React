import React from 'react';
import Header from './components/Header';
import Buscar from './components/Buscar';
import { videos } from './data/Videos.js';
import { VideoContext } from './components/VideoContext';
import ListVideo from './components/ListVideo';

function Home(props){
  return(
    <>
      <div className='user'>
        <h3>
        {props.login.nome}
        </h3>
        <div>
        <button onClick={() => {props.setLogin(undefined)} }>Logout</button>
        </div>
      </div>
      <div className='container'>
      <VideoContext.Provider value={videos}>
        <Header />
        <Buscar />
        <ListVideo />
      </VideoContext.Provider>
      </div>
    </>
  )
}

export default Home;