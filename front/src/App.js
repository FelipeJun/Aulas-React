import './App.css';
import {Routes, Route} from 'react-router-dom';
import Create from './pages/Create.js'
import Home from './pages/Home';
import Edit from './pages/Edit'

function App() {
  return (
    <>
      <Routes>
      <Route path='/index' element={<Home/>}/>
      <Route path='/criar' element={<Create/>}/>
      <Route path='/editar/:id' element={<Edit/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
