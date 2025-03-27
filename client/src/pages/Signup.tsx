import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { logo, signup } from "../assets/images";
import { baseUrl } from "../utils/constants";
import Header from "../components/Header";

const Signup = () => {
const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    userName:"",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
});
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
const [popUp, setPopUp] = useState(false)
const navigate = useNavigate()
useEffect(() => {
    if (localStorage.getItem("token")) {
    navigate("/profile")
    }  
},[])

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
    }));
};

const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (
    formData.firstName.trim() === "" ||
    formData.lastName.trim() === "" ||
    formData.userName.trim() === "" ||
    formData.email.trim() === "" ){
        setError("All fields are required");
        return;
    }
    if (formData.password.trim() !== formData.confirmPassword.trim()) {
        setError("Passwords are required");
        return;
    }

    if (!formData.terms) {
        setError("You must agree to the terms and conditions");
        return;
    }

    // Simulate API call to create a new user   
    try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/api/user/register`, {
            userName:formData.userName, 
            firstName:formData.firstName, 
            lastName:formData.lastName, 
            password:formData.password, 
            email:formData.email
        })
        if (response.status === 201) {
            setError("");
            setPopUp(true)
        }
        console.log("Form submitted:", formData);
    } catch (error:any) {
        setError(error.response.data.message);        
        console.log();  
    }
    setLoading(false);
    
};

return (
    <div  className="flex flex-col h-screen justify-between">
        <Header/>
        {popUp && (
            <div className="fixed z-30 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center ">
                <p onClick={()=>setPopUp(false)}>x</p>

                <Link to={'/'}> Go back to home page</Link>
            </div>)}


{/* 
        <Link to={'/'} className="absolute top-4 md:left-12 left-6 size-10">
        <img src={logo} alt="" />
        </Link> */}

    <div className="flex min-h-screen">
    <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
        <h2 className="text-4xl text-green-600 font-bold mb-6">Let's Get Started </h2>

        <form onSubmit={handleSubmit} className="space-y-4 space-x-2  border-green-600 px-3 py-6 rounded-lg shadow-lg">
        <label >
        First Name
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
        </label>
        <label >
            Last Name

            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder=" Last Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
        </label>
        <label >
            UserName
            <input
            type="username"
            name="userName"
            value={formData.userName}
            placeholder="Create Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
        </label>
<label>
    Email
            <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
</label>
<label>
    Password
            <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Create Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
</label>
            <label>
                Confirm Password

            <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
            </label>

            <div className="flex items-center">
            <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                id="terms"
                className="mr-2"
                onChange={handleChange}
                required
            />
            <label htmlFor="terms" className="text-sm">
                I agree to the <a href="#" className="text-blue-600">terms & policy</a>
            </label>
            </div>

            {error ? <p className="text-red-500">{error}</p>: <p className="h-[1lh]"></p>}

            <button
            disabled={loading}
            type="submit"
            className="w-full bg-green-700 disabled:bg-gray-400 text-white py-2 rounded-md hover:bg-green-800"
            >

            {loading?"Loading": "Signup"}
            </button>
        </form>

        <span className="mt-4 text-sm text-center">
            Have an account already? 
        </span>
            <Link to="/signin" className="text-blue-600 cursor-pointer">Sign In</Link>
        </div>
    </div>


    <div className="hidden lg:block w-1/2">
        <img
        src={signup}
        alt="Signup"
        className="h-full w-full object-cover"
        />
    </div>
    </div>
    <Footer/>
    </div>

);
};
export default Signup