import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Partice/Register'; // Ensure the correct path to your Firebase config

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { email, password } = data;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);

            if (userCredential.user) {
                navigate('/profile'); // Redirect on successful login
            }
        } catch (error) {
            console.error("Login error:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center mt-5">Login</h1>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" {...register("email", { required: true })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" {...register("password", { required: true })} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;
