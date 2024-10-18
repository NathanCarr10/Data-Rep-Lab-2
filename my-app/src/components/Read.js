// Importing the Movies component from the same directory
import Movies from "./Movies"
import { useEffect, useState } from "react";
import axios from "axios";
const Read = ()=>{
const [movies, setMovies] = useState([])
      useEffect(() => {
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
        .then((response)=>{
          console.log(response.data);
          setMovies(response.data.movies);
        })
        .catch((error) => {
          console.log(error);
        });
      });

    return (
        <div>
          {/* Displaying a heading */}
           <h3> Hello from read component </h3>
           {/* Passing the movie data (data array) as a prop (myMovies) to the Movies component */}
           <Movies myMovies={movies}/> 
        </div>
    )
}
//Exporting the Read component so it can be used in other parts of the application
export default Read;