import { Link } from "react-router-dom"
import { logo } from "../assets/images"

const Header = () => {
  return (
    
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md">

    {/* logo */}

    <Link to="/" className="flex items-center space-x-2">
    <img src={logo} alt="" width={30} height={30}/>
      <span className="text-lg font-bold">LinkTree Hub</span>
    </Link>

    {/* nav bar */}

    <nav className="hidden md:flex text-black space-x-6">
      <Link to="/signin" className=" hover:text-green-700">Sign In</Link>
      <Link to="signup" className=" hover:text-green-700">Sign Up</Link>
      <Link to="#" className=" hover:text-green-700">FAQs</Link>
    </nav>


    {/* <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md">
      Hello
    </button> */}
  </header>
  )
}

export default Header