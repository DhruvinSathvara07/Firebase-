import React, { useEffect, useState } from "react";
import { auth, db } from "../Partice/Register"; // Ensure correct path to Firebase config
import { signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    // Fetch user data from Firestore
    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    setUserData(userSnap.data());
                } else {
                    console.log("No user data found in Firestore");
                }
            } else {
                navigate("/login"); // Redirect to login if no user is logged in
            }
        };

        fetchUserData();
    }, []);

    // Function to handle password reset
    const handleResetPassword = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                await sendPasswordResetEmail(auth, user.email);
                toast.success("Password reset email sent! Check your inbox.");
            }
        } catch (error) {
            console.error("Error sending reset email:", error.message);
            toast.error("Failed to send reset email.");
        }
    };

    // Function to handle sign out
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully!");
            navigate("/login"); // Redirect to login after sign-out
        } catch (error) {
            console.error("Error signing out:", error.message);
            toast.error("Failed to sign out.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">User Profile</h2>
            {userData ? (
                <div className="card p-4 mt-3">
                    <p><strong>First Name:</strong> {userData.firstName}</p>
                    <p><strong>Last Name:</strong> {userData.lastName}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <div>

                        <button className="btn btn-warning me-3" onClick={handleResetPassword}>
                            Reset Password
                        </button>
                        <button className="btn btn-danger" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center">Loading user data...</p>
            )}
        </div>
    );
};

export default Profile;
