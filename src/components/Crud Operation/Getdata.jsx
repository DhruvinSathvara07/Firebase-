// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Getdata = () => {
//     const navigate = useNavigate()
//     const [formdata, setformdata] = useState([])

//     const fetchingData = async () => {
//         const result = await axios.get("http://localhost:3000/posts")
//         setformdata(result.data)
//     }

//     useEffect(() => {
//         fetchingData()
//     }, [])

//     // Delete
//     const handleDelete = async (id) => {
//         try {
//             const result = await axios.delete(`http://localhost:3000/posts/${id}`);
//             setformdata(formdata.filter((item) => item.id !== id))
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <>
//             <h1 className='text-center mt-2 mb-4'>Get Data</h1>
//             <div className="container table-responsive">
//                 <table className='table table-hovered table-stripped'>
//                     <thead className='table-success'>
//                         <tr className='text-center'>
//                             <th>id</th>
//                             <th>FirstName</th>
//                             <th>LastName</th>
//                             <th>email</th>
//                             <th>pwd</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             formdata && formdata.length > 0 ? (
//                                 formdata.map((item, index) => (
//                                     <tr key={index} className='text-center'>
//                                         <td>{index + 1}</td>
//                                         <td>{item.FirstName}</td>
//                                         <td>{item.LastName}</td>
//                                         <td>{item.email}</td>
//                                         <td>{item.pwd}</td>
//                                         <td>
//                                             <button className='btn btn-primary' onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
//                                             <button className='btn btn-danger ms-2' onClick={() => handleDelete(item.id)}>Delete</button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="6" className='text-center'>Data not found</td> </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }

// export default Getdata