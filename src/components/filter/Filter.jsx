import './filter.css';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { filterSongs } from '../../redux/action/songAction';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilter = (searchTerm) => {
    dispatch(filterSongs(searchTerm));
  };

  return (
    <div className="filter">
      <FaSearch />
      <input
        type="text"
        className="searchFilter"
        placeholder="Search Song/Artist"
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
}
