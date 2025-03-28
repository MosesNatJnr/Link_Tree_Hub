import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/profile")
        }  
      },[])
    
    return (
        
        <div className="flex flex-col h-screen justify-between ">   
    <Header/>
    <Hero/>
    <Footer/>
        </div>
    )
}

export default Home