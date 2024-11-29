// Importing necessary components
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';

//MovieItem component that receives 'props'
function MovieItem(props) {

  //useEffect runs when the component renders
  useEffect(() => {
    //Logging the current movie objext to the console
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
        .then(() => {
            props.Reload(); // Refresh the movie list after deletion
        })
        .catch((error) => {
            console.error("Error deleting movie:", error);
        });
    };



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
        <Link className="btn btn-primary" to={"/edit/" + props.mymovie._id}>Edit</Link> {/* code to create an edit button under each movie */}
      </Card>
      {/* Other movie details */}
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </div>

  );
}

//Exporting the MovieItem component so it can be used in other parts of the app
export default MovieItem;