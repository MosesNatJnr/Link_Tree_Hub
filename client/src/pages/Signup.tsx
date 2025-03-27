import { useState } from "react";
import Footer from "../components/Footer";

const Signup = () => {
const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    userName:"",
    email: "",
    password: ""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
    }));
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
};

return (
    <div className="flex min-h-screen">
    

    <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Get Started Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            name="First Name"
            placeholder="Enter your first name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
            <input
            type="text"
            name="Last Name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />
            <input
            type="username"
            name="Username"
            placeholder="Create Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />

            <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />

            <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
            onChange={handleChange}
            required
            />

            <div className="flex items-center">
            <input
                type="checkbox"
                name="terms"
                id="terms"
                className="mr-2"
                onChange={handleChange}
                required
            />
            <label htmlFor="terms" className="text-sm">
                I agree to the <a href="#" className="text-blue-600">terms & policy</a>
            </label>
            </div>

            <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
            >
            Signup
            </button>
        </form>

        <p className="mt-4 text-sm text-center">
            Have an account already? <a href="#" className="text-blue-600">Sign In</a>
        </p>
        </div>
    </div>


    <div className="hidden lg:block w-1/2">
        <img
        src="client\src\media\3301602.jpg"
        alt="Signup"
        className="h-full w-full object-cover"
        />
    </div>
    <Footer/>
    </div>
);
};
export default Signup