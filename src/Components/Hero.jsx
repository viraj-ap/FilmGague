import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

const Hero = ({ movies = [] }) => { // Set default value as an empty array
    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

    function playTrailer(movie) {
        const trailerId = movie.trailerLink.substring(movie.trailerLink.length - 11);
        navigate(`/Trailer/${trailerId}`);
    }

    return (
        <div className='w-full bg-black mt-32'>
            <Carousel>
                {movies.length > 0 ? (
                    movies.map((movie) => {
                        return (
                            <Paper key={movie.imdbId}>
                                <div className="relative h-[450px] md:h-[550px] bg-black flex justify-center items-center">
                                    <div
                                        className="w-full h-full bg-cover bg-no-repeat bg-center flex items-center justify-center"
                                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${movie.backdrops[0]})` }}
                                    >
                                        <div className="absolute top-[150px] md:top-[200px] flex flex-col md:flex-row justify-evenly items-center w-full space-y-4 md:space-y-0 md:space-x-4 px-4">
                                            <div className="border border-purple-500 rounded-lg h-[200px] md:h-[300px] overflow-hidden">
                                                <img className="h-full w-full object-cover" src={movie.poster} alt={movie.title} />
                                            </div>
                                            <div className="text-white flex flex-col justify-center items-center md:text-left">
                                                <h4 className="text-xl md:text-2xl font-bold">{movie.title}</h4>
                                            </div>
                                            <div className="flex justify-between items-center space-x-4">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className="text-red-600 hover:text-white transition duration-300 cursor-pointer">
                                                        <FontAwesomeIcon className="text-2xl md:text-[3rem] hover:text-[4rem]" icon={faCirclePlay} />
                                                    </div>
                                                </Link>
                                                <button
                                                    onClick={() => reviews(movie.imdbId)}
                                                    className="bg-purple-500 hover:bg-purple-600 text-white px-3 md:px-4 py-2 rounded-lg transition duration-300"
                                                >
                                                    Reviews
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        );
                    })
                ) : (
                    <div className="text-white text-center">No movies available</div>
                )}
            </Carousel>

            {/* Movie Gallery Section */}
            <div className="py-10 px-4">
                <h2 className="text-white text-2xl md:text-3xl text-center mb-6">Movie Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div
                                key={movie.imdbId}
                                className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-lg cursor-pointer"
                                onClick={() => playTrailer(movie)}
                            >
                                <img
                                    className="rounded-t-lg h-[150px] sm:h-[200px] w-full object-cover"
                                    src={movie.poster}
                                    alt={movie.title}
                                />
                                <div className="p-4 text-white">
                                    <h4 className="text-sm md:text-lg font-bold">{movie.title}</h4>
                                    <p className="text-xs md:text-sm text-gray-400">{movie.year}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-white text-center">No movies available in the gallery</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
