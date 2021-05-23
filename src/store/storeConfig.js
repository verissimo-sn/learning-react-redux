import { numberRedulcer } from './reducers/numerosReducer';
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros: numberRedulcer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;