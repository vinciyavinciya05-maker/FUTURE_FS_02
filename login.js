import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.username) tempErrors.username = "Username is required";
    if (!form.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
     
      setLoggedIn(true);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border rounded shadow-md">
      {loggedIn ? (
        <p className="text-green-600 font-semibold">
          Welcome, {form.username}! You are logged in.
        </p>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="block mb-1">Username</label>
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.username && <p className="text-red-600">{errors.username}</p>}
            </div>

            <div className="mb-3">
              <label className="block mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.password && <p className="text-red-600">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;