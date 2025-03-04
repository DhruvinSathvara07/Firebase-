import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axious = () => {
    const [userdata, setuserdata] = useState([])
    const fetchingData = async () => {
        const result = await axios.get("http://localhost:3000/posts");
        setuserdata(result.data);
    }

    useEffect(() => {
        fetchingData()
    }, [])

    return (
        <>
            <div className="container">
                <table className='table table-hovered table-stripped'>
                    <thead className='table-success'>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>email</th>
                            <th>pwd</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata && userdata.map((item, index) => {
                                console.log(item);
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.FirstName}</td>
                                        <td>{item.LastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.pwd}</td>
                                        {/* <td>{item.address.street}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default Axious