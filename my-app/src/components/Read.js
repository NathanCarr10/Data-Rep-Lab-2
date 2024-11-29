// Importing the Movies component from the same directory
import Movies from "./Movies"
import { useEffect, useState } from "react"; //By using this Hook, you tell React that your component needs to do something after render
import axios from "axios"; //Axios helps developers make HTTP requests from NodeJS or XMLHttpRequests from a browser.
const Read = () => {
  const [movies, setMovies] = useState([])// useState is React Hook that allows you to add state to a functional component

  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            setMovies(response.data.movies);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
  };

  useEffect(() => {
    
      Reload();
  });

  return (
    <div>
        <h2>Movie List</h2>
        <Movies myMovies={movies} ReloadData={Reload} />
    </div>
);
}
//Exporting the Read component so it can be used in other parts of the application
export default Read;