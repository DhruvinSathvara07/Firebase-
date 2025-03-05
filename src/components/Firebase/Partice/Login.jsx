import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Partice/Register'; // Ensure the correct path to your Firebase config
// import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { GoogleAuthProvider } from 'firebase/auth';

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

    // Google

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
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
                <button type="submit" className="btn ms-3 btn-primary" onClick={googleSignIn}>Google</button>
            </form>
        </div>
    );
}

export default Login;
