import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

it('renders hello', () => {
  let wrapper =shallow(<App />);
  const greet =<h1>Hello</h1>;
  expect(wrapper.contains(greet)).toBe(true);
});
