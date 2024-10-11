import MovieItem from "./movieitem";

const Movies = (props )=>{

    return props.MovieItem.map(
        (movie)=>{
            return <MovieItem mymovie={movie}/>
        }

    );
    

}
export default Movies;