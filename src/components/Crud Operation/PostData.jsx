// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// const PostData = () => {
//     const { register, handleSubmit, reset } = useForm();
//     const navigate = useNavigate()
//     const onSubmit = async (data) => {
//         try {
//             const result = await axios.post("http://localhost:3000/posts", data);
//             reset();
//             toast.success('Successfully Data Submitted!');
//         } catch (error) {
//             toast.error("This didn't work.");

            
//             console.log("Error:", error);
//         }
//     };
//     return (
//         <>
//             <Toaster position="top-center" reverseOrder={false} />
//             <h1 className='text-center text-primary mt-2'>Post-Data</h1>
//             <div className='ms-5 ps-5 pb-5'>
//                 <button onClick={() => navigate('/getdata')} className='btn btn-primary'>Get Data</button>
//             </div>

//             <div className="container">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="mb-3">
//                         <label className="form-label">First Name</label>
//                         <input type="text" {...register("FirstName")} className="form-control" required />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Last Name</label>
//                         <input type="text" {...register("LastName")} className="form-control" required />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Email address</label>
//                         <input type="email" {...register("email")} className="form-control" required />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <input type="password" {...register("pwd")} className="form-control" required />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default PostData;
