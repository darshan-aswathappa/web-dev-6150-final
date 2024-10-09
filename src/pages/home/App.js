import './App.css';
import NavBar from './NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from './Video.js'
import Cards from './Cards.js'
import Carousel from './Carousel.js';




function App() {
  return (
    <div>
      <NavBar />
      <Video />
      <Cards />
      <Carousel />
    </div>
    
  );
}

export default App;
