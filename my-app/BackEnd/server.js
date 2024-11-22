const express = require('express'); //Express is a user-friendly framework that simplifies the development process of Node applications
const app = express();
const port = 4000;

//To allow communication between your React app and Node/Express server, you need to install and configure the cors middleware
const cors = require('cors');
app.use(cors()); //This middleware setup allows your frontend app (React) to make API requests to the backend (Express) without encountering CORS-related issues.

//added cors headers to enable cors cross origin requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Installed body-parser: To handle POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//code to import mongoose database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster10.paimy.mongodb.net/DB14'); //adding in link to mongoose server

//Variable to add movue data to Mongoose Database
const movieSchema = new mongoose.Schema({
  title: String, 
  movieYear: String,
  moviePoster: String,
});

const movieModel = new mongoose.model('myMovies', movieSchema);

//importing movie data database file
app.get('/api/movies', async (req, res) => {
  const movies = await movieModel.find({}); /// adding data from create page on local host 3000
  res.status(200).json({movies});
});

//Finding Movie's by ID api/movies/******/
app.get('/api/movies/:id', async(req,res)=>{
  const movies = await movieModel.findById(req.params.id);
  res.json(movies);
})


//Added a POST method to the Express server that logs the title, year, and poster URL of the movie object passed from the React app
app.post('/api/movies',async (req, res) => {
  console.log(req.body.title);
  const {title, movieYear , moviePoster} = req.body;

  //saving new Movie Data to Database
  const newMovie = new movieModel({title,movieYear,moviePoster});
  await newMovie.save();//The await operator in JavaScript is used within an async function to pause the execution until a Promise is settled, which means it has been either fulfilled or rejected.

  res.status(201).json({"message": "Movie Added!", Movie:newMovie});
})

//app.listen() in Express is like telling your app to start listening for visitors on a specific address and port, much like how Node listens for connections
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});