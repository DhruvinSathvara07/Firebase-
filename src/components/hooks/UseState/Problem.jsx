import React, { useState } from 'react'

const Problem = () => {
    const [users, setUsers] = useState([
        { name: 'John', age: 20 },
        { name: 'Jill', age: 30 },
        { name: 'Peter', age: 40 },
    ])

    const Total = users.length
    const totalAge = users.reduce((acc, curElem) => acc + curElem.age, 0)

    return (
        <>
            <h1>Users</h1>
            {
                users.map((curElem, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <h3>{curElem.name}-{curElem.age}</h3>
                            </div>
                        </div>
                    )
                })
            }
            <h1>Total:{Total}</h1>
            <h1>TotalAge:{totalAge}</h1>
        </>
    )
}

export default Problem