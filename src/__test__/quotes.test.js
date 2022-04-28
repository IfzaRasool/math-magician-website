import React from 'react';
import Renderer from 'react-test-renderer';
import Quotes from '../components/quotes';
import '@testing-library/jest-dom';

it('render correctly have no items', () => {
  const quote = Renderer.create(<Quotes />).toJSON();

  expect(quote).toMatchSnapshot();
});
