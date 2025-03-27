import { useEffect, useState } from "react";
import { login } from "../assets/images";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/constants";
import Links from "./Links";
import Header from "../components/Header";
const Signin = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile")
    }  
  },[])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: value,
    }));
};
const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (formData.identifier.trim() === "" || formData.password.trim() === "") {
      setError("All fields are required");
      return;
    }

    // Simulate API call to authenticate the user   
    try {
      setLoading(true);
      const response = await axios.post(`${baseUrl}/api/user/login`, formData);
      if (response.status === 200) {
        setError("");
        localStorage.setItem("token",response.data.token)
        navigate("/profile")
      }
    } catch (error: any) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
    setLoading(false);
  };


  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <h2 className="text-6xl text-green-600 font-bold mb-4">Welcome back!</h2>
          <p className="text-black text-2xl  mb-6">
            Enter your Credentials to access your account
          </p>

          <form className="space-y-4 space-x-2  border-green-600 px-3 py-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium">Email address</label>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              className="w-full border p-2 rounded mb-4"
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
              placeholder="Enter password"
            />
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember for 30 days
              </label>
              <a href="#" className="text-blue-600 text-sm">
                Forgot password?
              </a>
            </div>
            {error ? <p className="text-red-500">{error}</p>: <p className="h-[1lh]"></p>}
            <button disabled={loading} className="w-full bg-green-700 text-white py-2 rounded">
              {loading?"loading": "Login"}
            </button>
          </form>

          <p className="mt-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block w-1/2">
          <img src={login} alt="login" className="h-full w-full object-cover" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
