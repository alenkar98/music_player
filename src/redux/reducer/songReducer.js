const initialState = {
  songs: [
    {
      name: 'Never gonna give u up',
      artist: 'Rick Astley',
      songLink: 'songs/NGGYU.MP3',
      songIndex: 1,
    },
    {
      name: 'Calm Down',
      artist: 'Rema',
      songLink: 'songs/Rema.MP3',
      songIndex: 4,
    },
    {
      name: 'Diamonds',
      artist: 'Rihanna',
      songLink: 'songs/Rihanna.MP3',
      songIndex: 2,
    },
    {
      name: 'Formidable',
      artist: 'Stromae',
      songLink: 'songs/Stromae.MP3',
      songIndex: 3,
    },
  ],
  filteredSongs: [],
  queue: [],
  isAllSongsPlaying: false,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SONGS':
      return { ...state, songs: action.payload };
    case 'FILTER_SONGS':
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm.trim() === '') {
        return { ...state, filteredSongs: [] };
      }
      const filteredSongs = state.songs.filter(
        (song) => song.name.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm) || '',
      );
      return { ...state, filteredSongs };
    case 'PLAY_ALL':
      return { ...state, isAllSongsPlaying: !state.isAllSongsPlaying };
    case 'ADD_ALL':
      const queue = state.songs.map((song, index) => ({
        ...song,
        onQueue: index === 0,
      }));
      return {
        ...state,
        queue,
      };
    case 'PLAY_NEXT':
      const currentPlayingIndex = state.queue.findIndex((song) => song.onQueue === true);
      if (currentPlayingIndex !== -1) {
        const updatedQueue = state.queue.map((song, index) => ({
          ...song,
          onQueue: index === currentPlayingIndex ? false : index === currentPlayingIndex + 1,
        }));
        return {
          ...state,
          queue: updatedQueue,
        };
      } else {
        console.log('No song in queue');
        return {
          ...state,
          queue: [],
        };
      }
    case 'CLEAR_QUEUE':
      return {
        ...state,
        queue: [],
      };
    default:
      return state;
  }
};

export default songReducer;
