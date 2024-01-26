import SongRow from '../songRow/SongRow';
import './songList.css';
import { useSelector } from 'react-redux';

export default function SongList() {
  const songs = useSelector((state) => state.song.songs);
  const filteredSongs = useSelector((state) => state.song.filteredSongs);
  const queue = useSelector((state) => state.song.queue);

  return (
    <section>
      <div className="trackTable">
        <div className="list"></div>
        <div className="songName">Song name</div>
        <div className="artistName">Artist Name</div>
        <div className="track">Track</div>
        <div className="buttons"></div>
      </div>
      <div className="trackList">
        {queue.length > 1
          ? queue.map((song, index) => <SongRow key={index} {...song} />)
          : (filteredSongs.length > 0 ? filteredSongs : songs).map((song, index) => <SongRow key={index} {...song} />)}
      </div>
    </section>
  );
}
