//Importing the MovieItem component
import MovieItem from "./movieitem";

//Movies component that takes props as an argument
const Movies = (props )=>{
    //Mapping through the myMovies prop, which is an array of movie objects
    return props.myMovies.map(
        (movie)=>{
            //Return a MovieItem component for each movie in array
            return <MovieItem mymovie={movie} key={movie._id}/>
        }

    );
}
//Exporting the Movies component so it can be used in other parts of the app
export default Movies;