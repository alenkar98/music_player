import Header from './components/header/Header';
import './musicPlayer.css';
import MusicUploadForm from './components/musicUploadForm/MusicUploadForm';
import SongList from './components/songList/SongList';

function MusicPlayer() {
  return (
    <div className="musicPlayer">
      <Header />
      <SongList />
      <MusicUploadForm />
    </div>
  );
}

export default MusicPlayer;
