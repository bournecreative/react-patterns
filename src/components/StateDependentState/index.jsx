import React, { useState, useReducer } from "react"
import "../styles.css"
import "./styles.css"

const Slider = ({ onChange, min, max }) => {
  const [value, setValue] = React.useState(1)
  return (
    <>
      {value}
      <input
        className="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const value = Number(e.target.value)
          onChange(value)
          setValue(value)
        }}
      />
    </>
  )
}

// Using useReducer, we have completely decoupled the update logic of our count state from our component.
// We are now mapping actions to state transitions. We are able to seperate how the state updates from the action that occured.
function reducer(state, action) {
  if (action.type === "increment") {
    return {
      count: state.count + state.step,
      step: state.step,
    }
  } else if (action.type === "decrement") {
    return {
      count: state.count - state.step,
      step: state.step,
    }
  } else if (action.type === "reset") {
    return {
      count: 0,
      step: state.step,
    }
  } else if (action.type === "updateStep") {
    return {
      count: state.count,
      step: action.step,
    }
  } else {
    throw new Error()
  }
}

export const StateDependentState = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 })

  return (
    <div>
      <p>
        When you encounter scenarios where state is dependent on other state, it
        is a good time to make use of useReducer
      </p>
      <div>
        <Slider
          min={0}
          max={10}
          onChange={(value) =>
            dispatch({
              type: "updateStep",
              step: value,
            })
          }
        />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <p>{state.count}</p>
      </div>
    </div>
  )
}
