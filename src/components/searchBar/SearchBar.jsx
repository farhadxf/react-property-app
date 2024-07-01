import './SearchBar.scss';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <form>
        <input type='text' name='location' placeholder='City Location' />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Min Price'
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <Link to='/search'>
          <button>
            <img src='/search.png' alt='' />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
