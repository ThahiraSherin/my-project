import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

          <h2 className="text-2xl font-bold text-center mb-6">
            Login to InsureCorrect
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              type="submit"
              className="w-full bg-primary font-bold text-white py-2 rounded bg-blue-500 transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            New user?{" "}
            <Link
              to="/register"
              className="text-primary font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;