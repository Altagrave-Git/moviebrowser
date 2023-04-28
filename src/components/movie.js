import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-light col-6 col-md-4 col-lg-3 my-5 mx-5">
      <img className="card-img-top" src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={"Image: " + movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <Link to="/" className="btn btn-warning">Details</Link>
      </div>
    </div>
  )
}

export default MovieCard;