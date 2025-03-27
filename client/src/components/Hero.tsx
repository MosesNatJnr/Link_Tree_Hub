import { Link } from "react-router-dom"
import { hero } from "../assets/images"

const Hero = () => {
  return (    
        <section className="flex flex-col-reverse md:flex-row items-center bg-primary  px-6 md:px-12 ">
    
      {/* Left Content (Stacks on mobile, inline on larger screens) */}
    <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
        One Link, Unlimited Possibilities! 
        </h1>
        <p className="text-gray-300 text-sm md:text-base mb-6">
        Stop losing traffic!, Share all your important links in one place—socials, store, blog, and more. <br />
        Boost engagement, track clicks, and grow your brand effortlessly.
        </p>
        <div className=" flex justify-center">
        <Link to={"/signup"} className="bg-green-600 text-white p-4 rounded-full  ">
        Sign up now and get started in seconds!
        </Link>
        </div>
    </div>

      {/* Right Image (Centers on mobile, stays aligned on desktop) */}
    <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img src={hero} alt="App UI" className="w-full max-w-xs md:max-w-full " />
    </div>
    </section>
)
}

export default Hero