import React, { useReducer } from 'react'
import range from 'lodash/range'
import chunk from 'lodash/chunk'

const ActionType = {
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  CALCULATE: 'CALCULATE'
}

const numberSet = chunk(range(1, 10), 3)

const initalValue = {
  x: null,
  y: null,
  action: null,
  result: null
}

const reducer = (state, action) => {
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

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initalValue)
  const action = {
    [ActionType.PLUS]: '+',
    [ActionType.MINUS]: '-',
    [ActionType.MULTIPLY]: '*',
    [ActionType.DIVIDE]: '/',
    [ActionType.CALCULATE]: '='
  }

  return (
    <div>
      <h3>useReducer / Calculator</h3>

      <table>
        <tbody>
          {numberSet.map(numbers => {
            return (
              <tr>
                {numbers.map(number => {
                  return (
                    <td>
                      <button onClick={() => dispatch({ value: number })}>
                        {number}
                      </button>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div style={{ marginTop: 20 }}>
        {Object.keys(ActionType).map(actionType => {
          return (
            <button
              onClick={() => {
                dispatch({ type: actionType })
              }}
            >
              {action[actionType]}
            </button>
          )
        })}
      </div>

      <h3>
        {state.x} {action[state.action]} {state.y}
      </h3>

      <h3>{state.result && `result: ${state.result}`}</h3>
    </div>
  )
}

export default Calculator
