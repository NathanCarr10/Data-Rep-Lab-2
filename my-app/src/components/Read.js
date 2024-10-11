// Importing the Movies component from the same directory
import Movies from "./Movies"
const Read = ()=>{
  // Defining an array of movie objects containing details like title, year, imdbID, and poster URL
   const data = [
        {
          "Title": "Avengers: Infinity War",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
      ];

    return (
        <div>
          {/* Displaying a heading */}
           <h3> Hello from read component </h3>
           {/* Passing the movie data (data array) as a prop (myMovies) to the Movies component */}
           <Movies myMovies={data}/> 
        </div>
    )
}
//Exporting the Read component so it can be used in other parts of the application
export default Read;