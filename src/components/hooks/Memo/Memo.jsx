import React, { memo, useState } from 'react'
import Hi from './Hi'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [step, stateStep] = useState(0)

    const handleReset = () => {
        stateStep("0")
    }
    return (
        <>
            <div className="counter-container">
                <h1 className='mb-5'>UseState Hook !</h1>
                <h5 className="counter-value">Count : {count}</h5>

                <div className="d-flex">
                    <h5 className='counter-value'>Step :</h5>
                    <input type="number" className='ms-3 mt-2' onChange={(e) => stateStep(Number(e.target.value))} />
                </div>

                <div className="d-flex mt-3">
                    <button className="counter-button" onClick={() => setCount(count + step)}>Increment</button>
                    <button className='counter-button ms-2' disabled={count <= 0} onClick={() => setCount(count - step)}>Decrement
                    </button>
                    <button className="counter-button ms-2" onClick={() => setCount(0)} onAuxClick={handleReset}>Reset</button>
                </div>
            </div>
            <Hi />
        </>
    )
}

export default Memo