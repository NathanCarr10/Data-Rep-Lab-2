// Importing necessary components
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

//MovieItem component that receives 'props'
function MovieItem(props) {
  //useEffect runs when the component renders
  useEffect(() => {
    //Logging the current movie objext to the console
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card>
        {/* Displaying the movie's title in the Card header */}
        <Card.Header>{props.mymovie.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Displaying the movie poster image */}
            <img src={props.mymovie.moviePoster} alt={props.mymovie.title} />
            {/* Displaying the movie's release year in the footer */}
            <footer>{props.mymovie.movieYear}</footer>
          </blockquote>
        </Card.Body>
        <Link to={"/edit/" + props.mymovie._id} className="btn btn-primary">Edit</Link>
      </Card>
    </div>
  );
}
//Exporting the MovieItem component so it can be used in other parts of the app
export default MovieItem;