// Importing the Movies component from the same directory
import Movies from "./Movies"
import { useEffect, useState } from "react"; //By using this Hook, you tell React that your component needs to do something after render
import axios from "axios"; //Axios helps developers make HTTP requests from NodeJS or XMLHttpRequests from a browser.
const Read = () => {
  const [movies, setMovies] = useState([])// useState is React Hook that allows you to add state to a functional component
  useEffect(() => {
    axios.get('http://localhost:4000/api/movies') //recieves data from localhost:400 which is our server.js file
      .then((response) => { // Axios request objects have a `then()` function, which means you can use them with promise chains and async/await.
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => { // handles errors
        console.log(error);
      });
  });

  return (
    <div>
      {/* Displaying a heading */}
      <h3> Hello from read component </h3>
      {/* Passing the movie data (data array) as a prop (myMovies) to the Movies component */}
      <Movies myMovies={movies} />
    </div>
  )
}
//Exporting the Read component so it can be used in other parts of the application
export default Read;