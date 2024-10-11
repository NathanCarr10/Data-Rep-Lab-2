//Importing Bootstrap CSS for styling the application
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing necessary components from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
//Importing various custom components used in the app
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
      {/* NavigationBar component is displayed at the top of the page for navigation */}
      <NavigationBar />
      {/* Routes component is used to define the different routes/pages in the app */}
      <Routes>
      {/* Route for the home page, rendering the Content component */}
      <Route path= "/" element={<Content/>}/>
      {/* Route for the "Read" page, rendering the Read component */}
      <Route path= "/Read" element={<Read/>}/>
      {/* Route for the "Create" page, rendering the Create component */}
      <Route path= "/Create" element={<Create/>}/>
      </Routes>
      {/* Footer component is displayed at the bottom of every page */}
      <Footer />
    </Router>
  );
}
//Exporting the App component to be rendered in the index.js file
export default App;