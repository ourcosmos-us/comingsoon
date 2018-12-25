import React from 'react';
import ReactDOM from 'react-dom';
import RayBradbury from './feature';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RayBradbury />, div);
  ReactDOM.unmountComponentAtNode(div);
});
