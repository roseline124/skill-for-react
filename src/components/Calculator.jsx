import React from 'react'
import range from 'lodash/range'
import chunk from 'lodash/chunk'

import useCalculator, { ActionType } from '../hooks/useCalculator'

const numberSet = chunk(range(1, 10), 3)

const Calculator = () => {
  const { state, setActionType, setNumber } = useCalculator()
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
                      <button onClick={() => setNumber(number)}>
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
            <button onClick={() => setActionType(actionType)}>
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
