import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Filter = () => {

    const [userdata, setuserdata] = useState([])
    const [selectcity, setSelectCity] = useState("")

    const api = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        setuserdata(result.data)
    }

    useEffect(() => {
        api()
        // finalData()
    }, [])

    // handle change function

    const handleChange = (event) => {
        setSelectCity(event.target.value)
    }

    const cities = userdata.map((items) => {
        return items.address.city
        // console.log(hi);
    })

    const finalData = userdata.filter((ele) => {
        var selectedcity = ele.address.city.includes(selectcity)
        return selectedcity
        // console.log(selectcity);
    })

    return (
        <>
            <h1 className='text-center text-primary'>Filter Data</h1>
            <select className='ms-5' onChange={handleChange}>
                <option value="">Select Cit   y</option>
                {
                    cities.map((items, index) => {
                        return (
                            <option key={index} value={items}>{items}</option>
                        )
                    })
                }
            </select>

            <div className="container">
                <table className="table table-hoverd table-stripped mt-5 text-center">
                    <thead className='table-success'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            finalData.map((items, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{items.name}</td>
                                        <td>{items.username}</td>
                                        <td>{items.email}</td>
                                        <td>{items.address.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Filter