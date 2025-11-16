import React, { useState } from "react";

const Login = ({ onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
        
        onLoginSuccess(data.token); 
        alert("Login successful");
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

                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;