import React, { memo, useCallback, useState } from 'react'
import { use } from 'react'
import Secpndprops from './Secpndprops'

const Usecallback = () => {
    const [count, setCount] = useState(0)
    const [add, setAdd] = useState(0)

    // for (let i = 0; i < 1; i++) { }

    const multiple = useCallback(
        (number) => {
            return number * add
        },
        [add],
    )
    console.log("I am callback");


    return (
        <>
            <h1>
                count: {count}
            </h1>

            <button onClick={() => setCount(count + 1)}>Add</button>
            <br />
            <h1>ADD : {add}</h1>
            <button className='ms-2' onClick={() => setAdd(add + 1)}>Minus</button>
            <Secpndprops />
            {/* <button className='ms-2' onClick={() => setCount(0)}>Reset</button> */}

        </>
    )
}

export default memo(Usecallback)