import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './sort.css';
import { LuArrowDownUp } from 'react-icons/lu';
import { useState } from 'react';
import { setSongs } from '../../redux/action/songAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortType, setSortType] = useState('');

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const dispatch = useDispatch();
  const songs = useSelector((state) => state.song.songs);

  const handleAscending = () => {
    setSortType(' Asc');
    const sortedSongs = [...songs].sort((a, b) => a.songIndex - b.songIndex);
    dispatch(setSongs(sortedSongs));
    setIsOpen(!isOpen);
  };

  const handleDescending = () => {
    setSortType(' Desc');
    const sortedSongs = [...songs].sort((a, b) => b.songIndex - a.songIndex);
    dispatch(setSongs(sortedSongs));
    setIsOpen(!isOpen);
  };

  return (
    <div className={'sort-container'}>
      <button className="sort" onClick={handleClick}>
        <LuArrowDownUp />
        <span>Sort By{sortType}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && (
        <div className="dropDown">
          <button onClick={handleAscending}>Ascending</button>
          <button onClick={handleDescending}>Descending</button>
        </div>
      )}
    </div>
  );
}
