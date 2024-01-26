import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import PlayAllButton from './PlayAllButton';

const mockStore = configureStore([]);

test('PlayAllButton component renders correctly', () => {
  const initialState = {
    song: {
      isAllSongsPlaying: false,
    },
  };

  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <PlayAllButton />
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
