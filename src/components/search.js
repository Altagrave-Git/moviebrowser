import Hero from './hero';
import MovieCard from "./moviecard";

const SearchView = ({ keyword, searchResults }) => {
  const title = `Results for: ${keyword}`;
  const movies = searchResults.map((movie, index) => <MovieCard key={index} movie={movie} />);
  
  return (
    <div>
      <Hero text={title} />
      <div className="container">
        <div className="d-flex flex-between row">
          {movies}
        </div>
      </div>
    </div>
  )
}

export default SearchView;