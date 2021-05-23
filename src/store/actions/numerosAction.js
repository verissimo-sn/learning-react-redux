import {
  NUM_MAX_ALTERADO,
  NUM_MIN_ALTERADO
} from './actionTypes';

// Action creator
export const alterarNumeroMinimo = (newNumber) => {
  return {
    type: NUM_MIN_ALTERADO,
    payload: newNumber,
  }
}

export const alterarNumeroMaximo = (newNumber) => {
  return {
    type: NUM_MAX_ALTERADO,
    payload: newNumber,
  }
}