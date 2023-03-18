import Video from './Video'
import Header from './Header';
import Buscar from './Buscar';
import { videos } from './data/videos';
import { VideoContext } from './VideoContext';
import ListVideo from './ListVideo';
function App() {
  return (

    <div className='container'>
      <VideoContext.Provider value={videos}>
        <Header/>
        <Buscar/>
        <ListVideo />
      </VideoContext.Provider>
    </div>
  );
}

export default App;
