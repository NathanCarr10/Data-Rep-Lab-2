//Importing the necessary components
import React from 'react';
 import { useParams } from 'react-router-dom'; //useParams is used to get the id of the movie from the URL, allowing us to retrieve the specific movie data from the database
 import { useState, useEffect } from 'react';
 import axios from 'axios';
 import { useNavigate } from "react-router-dom";

 //Defining the correct variables to be changed
 export default function Edit(props) {
   let { id } = useParams();
   const [title, setTitle] = useState("");
   const [movieYear, setYear] = useState("");
   const [moviePoster, setPoster] = useState("");
   const navigate = useNavigate(); //useNavigate is called to redirect the user back to the "read" page where they can view all movies, including the one they just edited.


 useEffect(() => { // Axios request objects have a `then()` function, which means you can use them with promise chains and async/await.
     axios.get('http://localhost:4000/api/movie/' + id) //recieves data from localhost:400 which is our server.js file
         .then((response) => {
             setTitle(response.data.title);
             setYear(response.data.year);
             setPoster(response.data.poster);
         })
         .catch((error) => { //handles errors
             console.log(error);
         });
 }, [id]);

 const handleSubmit = (event) => {
     event.preventDefault();
     const newMovie = { id, title, movieYear, moviePoster };
     axios.put('http://localhost:4000/api/movie/' + id, newMovie)
         .then((res) => {
             console.log(res.data);
             navigate('/read'); //Navigating to Read page which displays all Movie Items
         });
 }

 //HTML code for edit page. When different values are entered it updates each movie item on the Read page
 return (
     <div>
         <form onSubmit={handleSubmit}>
             <div className="form-group">
                 <label>Movie Title: </label>
                 <input type="text" 
                 className="form-control" 
                 value={title}
                 onChange={(e) => setTitle(e.target.value)} />
             </div>
             <div className="form-group">
                 <label>Release Year: </label>
                 <input type="text" 
                 className="form-control" 
                 value={movieYear} 
                 onChange={(e) => setYear(e.target.value)} />
             </div>
             <div className="form-group">
                 <label>Poster URL: </label>
                 <input type="text" 
                 className="form-control" 
                 value={moviePoster} 
                 onChange={(e) => setPoster(e.target.value)} />
             </div>
             <div className="form-group">
                 <input type="submit" value="Edit Movie" className="btn btn-primary" />
             </div>
         </form>
     </div>
 );
 }