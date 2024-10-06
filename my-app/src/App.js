import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* Printing a Hello World statement */}
      <h1>Hello World!</h1>
      {/* adding function to display current time */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
