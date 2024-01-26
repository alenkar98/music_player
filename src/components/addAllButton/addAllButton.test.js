import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AddAllButton from './AddAllButton';

const mockStore = configureStore([]);

test('AddAllButton component renders correctly', () => {
  const initialState = {
    song: {
      queue: [], // Adjust the state based on your actual Redux state structure
    },
  };

  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <AddAllButton />
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
