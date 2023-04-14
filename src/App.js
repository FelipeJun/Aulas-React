import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Character from './pages/Characters';
import Details from './pages/Details';
import { CharacterProvider } from './CharacterContext';

function App() {
  return (
    <CharacterProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character' element={<Character />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </CharacterProvider>
  );
}

export default App;