import Hero from "./hero";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const MovieView = () => {
  
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5f20273fd7bb65b5bb1dd8450bf11dd1`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovieDetails(data);
        setIsLoading(false);
      })
  }, [id])


  function renderMovieDetails() {    
    if (isLoading) {
      return <Hero text="Loading..." />
    } else {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        <>
          <Hero text={movieDetails.title} backdrop={backdropPath} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img className="img-fluid shadow rounded" src={posterPath} alt={movieDetails.title + " Image"} />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return renderMovieDetails()
}

export default MovieView;