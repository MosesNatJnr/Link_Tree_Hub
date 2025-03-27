// import img from "client\src\media\logo.png"

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md">

    {/* logo */}

    <div className="flex items-center space-x-2">
    <img src="client\src\media\logo.png" alt="" width={30} height={30}/>
      <span className="text-lg font-bold">LinkTree Hub</span>
    </div>

{/* nav bar */}

    <nav className="hidden md:flex space-x-6">
      <a href="#" className="text-white hover:text-green-700">Sign In</a>
      <a href="#" className="text-white hover:text-green-700">Sign Up</a>
      <a href="#" className="text-white hover:text-green-700">FAQs</a>
    </nav>


    <button className="hidden md:block bg-primary text-white px-4 py-2 rounded-md">
      Hello
    </button>
  </header></div>
  )
}

export default Header