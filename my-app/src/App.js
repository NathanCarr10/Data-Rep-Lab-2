import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
import Movies from './components/Movies';



/**
 * App component is the main component of the application.
 */
function App() {
  return (
    // Router provides routing functionality to the entire application.
    <Router>
      <NavigationBar />
      <Routes>
      <Route path= "/" element={<Content/>}/>
      <Route path= "/Read" element={<Read/>}/>
      <Route path= "/Create" element={<Create/>}/>
      <Route path= "/Movies" element={<Movies/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;