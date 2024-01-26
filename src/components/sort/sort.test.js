import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You may need to install this package

import Sort from './Sort';

const mockStore = configureStore([]);

test('Sort component renders correctly', () => {
  const store = mockStore({ song: { songs: [] } }); // Initialize the store with the necessary state
  const component = renderer.create(
    <Provider store={store}>
      <Sort />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
