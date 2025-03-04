import React from 'react';
import { useForm } from "react-hook-form";
import { auth, db } from './Register';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Navigate, useNavigate } from 'react-router-dom';

const Forms = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const { email, password, firstName, lastName } = data;

            // Step 1: Create User in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created:", user.uid);

            // Step 2: Store user data in Firestore
            if (user) {
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                });
                console.log("User data stored successfully in Firestore!")
                navigate('/login')
            }

        } catch (error) {
            console.error("Error creating user:", error.message);
        }
    };


    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center mt-5 mb-5'>Resgister</h1>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" {...register("firstName")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" {...register("lastName")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" {...register("email")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" {...register("password")} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Forms;
