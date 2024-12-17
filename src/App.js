import './App.css';
import Footer from './components/Footer/Footer';
import MoviesList from './components/MovieCardComponent/MovieList';
import MovieSlider from './components/MovieSlider/MovieSlider';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
