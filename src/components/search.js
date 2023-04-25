import Hero from './hero';

const SearchView = ({ keyword, searchResults }) => {
  const title = `Results for: ${keyword}`;
  return (
    <div>
      <Hero text={title} />
    </div>
  )
}

export default SearchView;