import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

it('renders correctly have are no items', () => {
  const calComponent = renderer.create(<Calculator />);
  const tree = calComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
