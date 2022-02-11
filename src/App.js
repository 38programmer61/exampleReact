import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import FavoriteCountries from './components/FavoriteCountries/FavoriteCountries';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='content' >
          <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/favorite-countries' element={<FavoriteCountries />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
