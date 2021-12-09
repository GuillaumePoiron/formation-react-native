import ActionTransaction from '../components/ActionTransaction/ActionTransaction';
import React from 'react';
const initialState = {
  children: null,
};

export const MODAL_ACTIONS = Object.freeze({
  SHOW: 'SHOW',
  HIDE: 'HIDE',
});
export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_ACTIONS.SHOW:
      return {...state, children: action.value};
    case 'DEPOT':
    case 'RETRAIT':
    case MODAL_ACTIONS.HIDE:
      return {...state, children: null};

    default:
      return state;
  }
};
