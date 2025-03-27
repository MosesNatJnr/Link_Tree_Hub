
const Footer = () => {
return (
    <div> <footer className="bg-green-600 text-white py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between items-center text-center sm:text-left space-y-6 sm:space-y-4 md:space-y-0">
    
    <div className="w-full  sm:w-auto">
        <h2 className="text-lg font-bold">LinkTree Hub</h2>
        <p className="text-white text-sm">&copy; {new Date().getFullYear()} LinkTree Hub. All rights reserved.</p>
    </div>

    <nav className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
        <a href="#" className="text-white hover:text-green-500">Privacy Policy</a>
        <a href="#" className="text-white hover:text-green-500">Terms of Use</a>
        <a href="#" className="text-white hover:text-green-500">Contact Us</a>
    </nav>

    <div className="flex space-x-4">
        <a href="#" className="tewhite hover:text-green-500 text-xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="tewhite hover:text-green-500 text-xl"><i className="fab fa-twitter"></i></a>
        <a href="#" className="tewhite hover:text-green-500 text-xl"><i className="fab fa-instagram"></i></a>
    </div>
    
    </div>
</footer></div>
)
}

export default Footer


