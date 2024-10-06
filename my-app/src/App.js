import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

/**
 * Layout component is responsible for rendering the NavigationBar,
 * Footer and Header based on the current URL,
 * and the routes that define different pages of the app.
 */
function Layout() {
  // useLocation hook is used to access the current URL path
  const location = useLocation();

  return (
    <>
      {/* The NavigationBar is rendered at the top for all routes */}
      <NavigationBar />

      {/* Render the Footer component only when the path is '/read' */}
      {location.pathname === '/read' && <Footer />}

      {/* Render the Header component only when the path is '/create' */}
      {location.pathname === '/create' && <Header />}

      {/* Define routes for the application */}
      <Routes>
        <Route path="/home" element={<Content />} />
        
        <Route path="/read" element={<h1>Read Component</h1>} />
        
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
    </>
  );
}

/**
 * App component is the main component of the application.
 */
function App() {
  return (
    // Router provides routing functionality to the entire application.
    <Router>
      <Layout />
    </Router>
  );
}

export default App;