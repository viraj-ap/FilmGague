import { useEffect, useRef } from 'react';
import api from "../api/axiosConfig";
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import React from 'react';

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getMovieData(movieId);
      try {
        
        const response = await api.get(`/api/v1/reviews/${movieId}`);
        const fetchedReviews = response.data; 
        setReviews(Array.isArray(fetchedReviews) ? fetchedReviews : []); 
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchData();
  }, [movieId, getMovieData, setReviews]); 

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
      const updatedReviews = [...reviews, { body: rev.value }]; 
      rev.value = ""; 
      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto mt-36">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white">Reviews</h3>
      </div>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        {/* Movie Poster */}
        <div className="flex-1">
          <img src={movie?.poster} alt={movie?.title} className="w-full h-auto object-cover" />
        </div>
        {/* Review Section */}
        <div className="flex-1">
          <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
          <div className="my-6">
            <hr className="border-gray-700" />
          </div>

          {/* Check if movie exists and has reviewIds before mapping */}
          {movie && movie.reviewIds ? (
            movie.reviewIds.map((sub, index) => (
              <div key={index} className="mb-4">
                <p className="text-white">{sub.body}</p>
                <hr className="border-gray-700 my-2" />
              </div>
            ))
          ) : (
            <p className="text-gray-400">No reviews available for this movie.</p>
          )}

          {/* Display newly added reviews */}
          {Array.isArray(reviews) && reviews.map((r, index) => (
            <div key={index} className="mb-4">
              <p className="text-white">{r.body}</p>
              <hr className="border-gray-700 my-2" />
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <hr className="border-gray-700" />
      </div>
    </div>
  );
};

export default Reviews;
