import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SongList from './SongList';

const mockStore = configureStore([]);

test('SongList component renders correctly', () => {
  const initialState = {
    song: {
      songs: [],
      filteredSongs: [],
      queue: [],
    },
  };

  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <SongList />
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
