import { FaCaretDown, FaHeart, FaPause, FaPlay } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { LuForward } from 'react-icons/lu';
import './songRow.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playNextSong } from '../../redux/action/songAction';

export default function SongRow({ name, artist, songIndex, songLink, onQueue }) {
  const dispatch = useDispatch();
  const isAllSongsPlaying = useSelector((state) => state.song.isAllSongsPlaying);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isAllSongsPlaying) {
      handlePlayButtonClick();
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }, [isAllSongsPlaying]);

  useEffect(() => {
    if (onQueue) {
      setIsPlaying(true);
      audioRef.current.play();
    }
  }, [onQueue]);

  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      const audioElement = audioRef.current;
      if (!isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  };

  const handleSongEnded = () => {
    setIsPlaying(false);
    dispatch(playNextSong());
  };

  return (
    <>
      <div className="row">
        <div className="list">
          <button onClick={handlePlayButtonClick}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
        </div>
        <div className="songName">
          <span>{name}</span>
        </div>
        <div className="artistName">
          <span>{artist}</span>
        </div>
        <div className="track">
          <span>{songIndex}</span>
        </div>
        <div className="buttons">
          <button>
            <FaHeart />
          </button>
          <button>
            <TiTick />
          </button>
          <button>
            <LuForward />
          </button>
          <button>
            <FaCaretDown />
          </button>
        </div>
      </div>
      <div>
        <audio ref={audioRef} onEnded={handleSongEnded}>
          <source src={songLink} />
        </audio>
      </div>
    </>
  );
}
