import {createStore, combineReducers} from 'redux';
import modalReducer from './modalReducer';
import navigationReducer from './navigationReducer';

export const initialState = {
  solde: 0.0,
  transactions: [],
};

const montantDuVol = 100.0;

const comptesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT':
      const p1 = fetch('http://localhost:5679/transactions').then(f =>
        f.json(),
      );
      const p2 = fetch('http://localhost:5679/data').then(f => f.json());
      Promise.all(p1, p2).then(arr_arr => console.log(arr_arr));
      return state;
    case 'DEPOT':
      return {
        ...state,
        transactions: [...state.transactions, action.value],
        solde: state.solde + action.value.price,
      };

    case 'RETRAIT':
      return {
        ...state,
        transactions: [...state.transactions, action.value],
        solde: state.solde + action.value.price,
      };

    case 'VOL_TENUE_COMPTE':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {libele: "J'aime mon client, ton conseiller", price: montantDuVol},
        ],
        solde: state.solde - montantDuVol,
      };

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    data: comptesReducer,
    modal: modalReducer,
    nav: navigationReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
