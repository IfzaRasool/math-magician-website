import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/home';

it('render correctly', () => {
  const controlls = renderer.create(<Home />).toJSON();

  expect(controlls).toMatchSnapshot();
});
