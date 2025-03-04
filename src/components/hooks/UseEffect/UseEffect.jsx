import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("hello ", count);
    }, [count])


    return (
        <>
            <h1>Use Effets Hooks</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default UseEffect