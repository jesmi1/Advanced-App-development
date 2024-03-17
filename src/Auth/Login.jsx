import React from 'react';

function Login() {
    return (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md max-w-xs w-full">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input type="text" id="username" name="username" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your username" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
                    </div>
                    {/* Link to home page */}
                    <button type="submit" className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-center">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
