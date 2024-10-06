import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**
 * NavigationBar component renders a responsive navigation bar
 * using Bootstrap components. It includes links to different
 * sections of the application.
 */

const NavigationBar = () => {
  return (
        // Navbar component with a dark background theme
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            {/* Brand name/logo of the Navbar */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            {/* Link to the Home page */}
              <Nav.Link href="/">Home</Nav.Link>
            {/* Link to the Create page */}
              <Nav.Link href="/create">Create</Nav.Link>
            {/* Link to the Read page */}
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;