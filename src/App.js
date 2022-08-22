import React, { useReducer } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Nav from './components/Nav';

const initialState = {
  currentValue: 0,
  prevValue: 0,
  operation: null
}

export const ACTIONS = {
  ADD_DIGIT: 'ADD_DIGIT',
  CHOOSE_OPERATION: 'CHOOSE_OPERATION',
  CLEAR: 'CLEAR',
  EVALUATE: 'EVALUATE'
}

function reducer (state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload === 0 && state.currentValue === 0) return state
      if (payload === '.' && state.currentValue.includes('.')) return state
      return {
        ...state,
        currentValue: `${state.currentValue || ''}${payload}`
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentValue === 0 && state.prevValue === 0) return state;
      if (state.currentValue === 0) {
        return {
          ...state,
          operation: payload
        }
      }
      if (state.prevValue === 0) {
        return {
          ...state,
          prevValue: state.currentValue,
          currentValue: 0,
          operation: payload
        }
      }
      return {
        ...state,
        prevValue: evaluate(state),
        currentValue: evaluate(state),
        operation: payload
      }
    case ACTIONS.CLEAR:
      return {
        currentValue: 0,
        prevValue: 0,
        operation: null
      }
    case ACTIONS.EVALUATE: {
      if (state.currentValue === 0 || state.prevValue === 0 || state.operation === null) return state

      return {
        ...state,
        prevValue: 0,
        currentValue: evaluate(state),
      }
    }
    default:
      break;
  }
}

function evaluate ({ currentValue, prevValue, operation }) {
  let current = parseFloat(currentValue);
  let prev = parseFloat(prevValue);

  let result

  switch (operation) {
    case '+':
      result = prev + current
      break;
    case '-':
      result = prev - current
      break;
    case '×':
      result = prev * current
      break;
    case '÷':
      result = prev / current
      break;

    default:
      break;
  }
  return result.toString();
}

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='flex flex-col m-auto bg-black text-white justify-between w-[100vw] max-w-[400px] h-[100vh] max-h-[800px] rounded-[30px]'>
      <Nav />
      <div>
        <Display value={state.currentValue} prev={state.prevValue} />
        <Buttons value={state.currentValue} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
