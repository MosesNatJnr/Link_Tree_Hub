import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const Home = () => {
    return (
        
        <div className="flex flex-col h-screen justify-between ">   
    <Header/>
    <Hero/>
    <Footer/>
        </div>
    )
}

export default Home