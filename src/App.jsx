import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Components/layout';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Trailer from './Components/Trailer';
import NotFound from './Components/NotFound';
import Reviews from './Components/Reviews';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]); // Keep this as an empty array

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;

      setMovie(singleMovie);

      // Ensure reviews is always an array
      setReviews(Array.isArray(singleMovie.reviews) ? singleMovie.reviews : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/Reviews/:movieId" element={
            <Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
