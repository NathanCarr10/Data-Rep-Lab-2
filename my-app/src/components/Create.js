import { useState } from "react";

// Create component definition
const Create = () => {


    const [title, setTitle] = useState('');
    const [movieYear, setmovieYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
    }

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
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
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