import React, { useMemo, useState } from 'react'
import { use } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)
    const handleEdit = () => {
        setCount(count + 1)
    }

    const expensiveComponents = (num) => {
        for (let i = 0; i < 10000000; i++) { }
        num * 2
    }

    const multiply = useMemo(() => expensiveComponents(5), [])


    return (
        <>
            <h1>Value:{count}</h1>
            {multiply}
            <button onClick={handleEdit}>Click</button>
        </>
    )
}

export default Usememo