import { FaPlay, FaPause } from 'react-icons/fa';
import './playAllButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { playAllSongs } from '../../redux/action/songAction';

export default function PlayAllButton() {
  const dispatch = useDispatch();
  const isAllSongsPlaying = useSelector((state) => state.song.isAllSongsPlaying);

  const handlePlayAll = () => {
    if (isAllSongsPlaying) console.log('All songs on pause');
    else console.log('All songs playing');
    dispatch(playAllSongs());
  };

  return (
    <button className="playAll" onClick={handlePlayAll}>
      {isAllSongsPlaying ? <FaPause /> : <FaPlay />}
      <span>{isAllSongsPlaying ? 'Stop All' : 'Play All'}</span>
    </button>
  );
}
