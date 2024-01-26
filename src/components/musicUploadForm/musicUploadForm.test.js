import React from 'react';
import renderer from 'react-test-renderer';
import MusicUploadForm from './MusicUploadForm';

test('MusicUploadForm component renders correctly', () => {
  const component = renderer.create(<MusicUploadForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
