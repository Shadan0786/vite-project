import React, { useState } from "react";

const Signup = ({ onClose, onSignupSuccess }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            onSignupSuccess(data.user);
            alert("Signup successful");
            onClose();
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">

                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    onClick={onClose}
                >
                    ✖
                </button>

                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />

                    <button className="bg-blue-600 text-white py-2 rounded">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;