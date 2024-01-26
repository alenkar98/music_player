import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Filter from './Filter';

const mockStore = configureStore([]);

test('Filter component renders correctly', () => {
  const initialState = {
    song: {
      name: 'test',
      artist: 'test',
      songLink: 'songs/test.mp3',
      songIndex: 1,
    },
  };

  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <Filter />
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
