import { Link } from "react-router-dom"
import { logo } from "../assets/images"

const Header = () => {
  return (
    
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-green-600 text-white shadow-md">

    {/* logo */}

    <Link to="/" className="flex items-center space-x-2">
    <img src={logo} alt="" width={30} height={30}/>
      <span className="text-lg font-bold">LinkTree Hub</span>
    </Link>

    {/* nav bar */}

    <nav className="hidden md:flex text-black space-x-6">
      <Link to="/signin" className=" text-white hover:text-green-700 ">Sign In</Link>
      <Link to="/signup" className="text-white hover:text-green-700 ">Sign Up</Link>
      <Link to="#" className="text-white hover:text-green-700 ">FAQs</Link>
    </nav>


  
  </header>
  )
}

export default Header