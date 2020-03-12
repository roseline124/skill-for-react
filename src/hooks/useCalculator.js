import { useReducer } from 'react'

export const ActionType = {
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  CALCULATE: 'CALCULATE'
}

function reducer(state, action) {
  const { x, y, result } = state

  if (action.value) {
    if (x && !result) {
      return { ...state, y: action.value }
    }

    return {
      ...state,
      ...(result && { result: null, action: null, y: null }),
      x: action.value
    }
  }

  if (action.type !== ActionType.CALCULATE) {
    return { ...state, action: action.type }
  }

  if (!x || !y) return state

  switch (state.action) {
    case ActionType.PLUS:
      return { ...state, result: x + y }
    case ActionType.MINUS:
      return { ...state, result: x - y }
    case ActionType.MULTIPLY:
      return { ...state, result: x * y }
    case ActionType.DIVIDE:
      return { ...state, result: x / y }
    default:
      return state
  }
}

export default function useCalculator() {
  const [state, dispatch] = useReducer(reducer, {
    x: null,
    y: null,
    action: null,
    result: null
  })

  const setActionType = type => dispatch({ type })
  const setNumber = value => dispatch({ value })

  return {
    state,
    setActionType,
    setNumber
  }
}
