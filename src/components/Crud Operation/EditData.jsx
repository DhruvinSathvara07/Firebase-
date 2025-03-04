// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
// const EditData = () => {
//     const { id } = useParams()
//     const { register, handleSubmit, setValue } = useForm()
//     const navigate = useNavigate()
//     const getdata = async () => {
//         try {
//             const result = await axios.get(`http://localhost:3000/posts/${id}`);
//             const data = result.data
//             // console.log(data);
//             setValue("FirstName", data.FirstName)
//             setValue("LastName", data.LastName)
//             setValue("email", data.email)
//             setValue("pwd", data.pwd)

//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         getdata()
//     }, [])

//     const onSubmit = async (formdata) => {
//         try {
//             const result = await axios.put(`http://localhost:3000/posts/${id}`, formdata);
//             setTimeout(() => {
//                 navigate("/getdata")
//             }, 1000);
//         } catch (error) {
//             console.log(error);
//         }

//     }

//     return (
//         <div className="container">
//             <Toaster />
//             <h2>Edit Data</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="mb-3">
//                     <label className="form-label">First Name</label>
//                     <input type="text" {...register("FirstName")} className="form-control" required />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Last Name</label>
//                     <input type="text" {...register("LastName")} className="form-control" required />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email address</label>
//                     <input type="email" {...register("email")} className="form-control" required />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Password</label>
//                     <input type="password" {...register("pwd")} className="form-control" required />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Update</button>
//             </form>
//         </div>
//     );
// };

// export default EditData;
