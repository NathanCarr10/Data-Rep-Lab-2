import { useState } from "react"; //useState is React Hook that allows you to add state to a functional component

// Create component definition
const Create = () => {

    //useState is React Hook that allows you to add state to a functional component
    const [title, setTitle] = useState('');
    const [movieYear, setmovieYear] = useState('');
    const [moviePoster, setmoviePoster] = useState('');
    

    //this allows you to handle the submissions
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        console.log(movieYear);
        console.log(moviePoster);
    }
    //user enters values for movie title, movie year and movie poster url
    return (
        <div>
            <h2>This is my Create Component.</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="number"
                            className="form-control"
                            value={movieYear}
                            onChange={(e) => { setmovieYear(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input type="text"
                            className="form-control"
                            value={moviePoster}
                            onChange={(e) => { setmoviePoster(e.target.value) }}
                        />
                    </div>

                </div>
                <input type="submit" value="Add Movie" />
            </form>
        </div>
    );
}
// Exporting the Create component to be used in other parts of the application
export default Create;