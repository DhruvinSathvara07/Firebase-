// import React from "react";
// import { useForm } from "react-hook-form";
// import { auth, db } from "./Firebase"; // Ensure both auth and db are imported
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// const Register = () => {
//     const { register, handleSubmit, reset } = useForm();

//     const onSubmit = async (data) => {
//         const { email, pwd, FirstName, LastName } = data;

//         try {
//             // Create user with Firebase Auth
//             const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
//             const user = userCredential.user; // Get the created user

//             if (user) {
//                 // Add user details to Firestore
//                 await setDoc(doc(db, "Users", user.uid), {
//                     FirstName,
//                     LastName,
//                     email,
//                     pwd
//                 });

//                 console.log("User registered and data stored successfully!");
//                 reset(); // Reset form after successful registration
//             }
//         } catch (error) {
//             console.error("Error during registration:", error.message);
//         }
//     };

//     return (
//         <div className="container">
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
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Register;
