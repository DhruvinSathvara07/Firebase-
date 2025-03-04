import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [userData, setuserData] = useState([]);
    const fetchingData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => setuserData(json))
    }

    useEffect(() => {
        fetchingData()
    }, [])

    return (
        <>
            <table className='table table-hovered table-stripped'>
                <thead className='table-dark'>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userData && userData.map((item) => {
                        console.log(item);
                        return (
                            <tr>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td>

                                    {item.username}
                                </td>
                                <td>
                                    {item.email}

                                </td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
        </>
    )
}

export default Fetch