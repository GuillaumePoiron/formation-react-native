import HomePage from '../pages/HomePage/HomePage';
import React from 'react';
const initialState = {
  page: <HomePage />,
  name: 'Home',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GO_TO':
      return {page: action.value, name: action.name};

    default:
      return state;
  }
};
