export const setSongs = (songs) => ({
  type: 'SET_SONGS',
  payload: songs,
});

export const filterSongs = (searchTerm) => ({
  type: 'FILTER_SONGS',
  payload: searchTerm,
});

export const playAllSongs = () => ({
  type: 'PLAY_ALL',
});

export const addAllSongsToQueue = () => ({
  type: 'ADD_ALL',
});

export const playNextSong = () => ({
  type: 'PLAY_NEXT',
});

export const clearQueue = () => ({
  type: 'CLEAR_QUEUE',
});
