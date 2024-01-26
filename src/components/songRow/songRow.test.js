import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SongRow from './SongRow';

const mockStore = configureStore([]);

test('SongRow component renders correctly', () => {
  const initialState = {
    song: {
      isAllSongsPlaying: false,
    },
  };

  const store = mockStore(initialState);

  const songProps = {
    name: 'Test Song',
    artist: 'Test Artist',
    songIndex: 1,
    songLink: 'test-song-link.mp3',
    onQueue: false,
  };

  const component = renderer.create(
    <Provider store={store}>
      <SongRow {...songProps} />
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
