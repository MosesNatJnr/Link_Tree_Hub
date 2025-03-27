import Footer from "../components/Footer";
const Signin = () =>  {
    return (
    <div className="flex flex-col lg:flex-row min-h-screen">
    
        <div className="flex-1 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
        <p className="text-gray-600 mb-6">Enter your Credentials to access your account</p>

        <form className="w-full max-w-sm">
            <label className="block text-sm font-medium">Email address</label>
            <input type="email" className="w-full border p-2 rounded mb-4" placeholder="Enter your email" />

            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="w-full border p-2 rounded mb-2" placeholder="Enter password" />
            <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember for 30 days
            </label>
            <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
            </div>

            <button className="w-full bg-green-700 text-white py-2 rounded">Login</button>
        </form>

        <p className="mt-4 text-sm">
            Don’t have an account? <a href="#" className="text-blue-600">Sign Up</a>
        </p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex flex-1 bg-cover bg-center" style={{backgroundImage:"url('/client/src/media/4903699.jpg')" }}>
        </div>
        <Footer/>
    </div>
    );
};

export default Signin