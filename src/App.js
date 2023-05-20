import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import RUser from './components/RUser'
import Error from './components/Error'
import { UserContext } from './UserContext'
import React from "react";


function App() {
  const [user, setUsers] = React.useState();

  React.useEffect(()=> {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("APP");
        console.log(data.results[0]);
        setUsers(data.results[0]);
      });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path='/'index element = {<Home/>}/>
        <Route path='/random' element = {<RUser/>}/>
        <Route path='*' element = {<Error/>}/>
      </Routes> 
    </UserContext.Provider>
  );
}

export default App;
