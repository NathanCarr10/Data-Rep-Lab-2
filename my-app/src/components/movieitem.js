// Importing necessary components
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

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
        <Card.Header>{props.mymovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Displaying the movie poster image */}
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
            {/* Displaying the movie's release year in the footer */}
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
//Exporting the MovieItem component so it can be used in other parts of the app
export default MovieItem;