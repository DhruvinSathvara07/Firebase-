import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        if (state < 50) {
            return state + 1
        } else {
            return state
        }
    } if (action.type === "DECREMENT") {
        if (state > 0) {
            return state - 1
        } else {
            return 0
        }
    } if (action.type === "RESET") {
        return 0
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <h1>Value : {count} </h1>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>
        </>
    )
}

export default UseReducer