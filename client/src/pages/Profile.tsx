import { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants";
import Loader from "../components/Loader";
import api from "../utils/api";
import Altheadr from "../components/Altheadr";
import Footer from "../components/Footer";
import { profilePlaceholder } from "../assets/images";


interface UserData{
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  links: [];
}
const Profile = () => {
  const [userData, setUserData] = useState<UserData>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
const getUserData= async()=>{
  try {
    setLoading(true);
    const response = await api.get(`${baseUrl}/api/user/profile`);
    if (response.status === 200) {
      setUserData(response.data);
    }
  } catch (error: any) {
    if (error.status === 401) {
      localStorage.removeItem("token")
    }
    console.error(error);
  }
  setLoading(false);
}
getUserData()
  
  },[])
  return (
    loading?<div>
      <Loader/>
    </div>
     :
     <div>
      
      <Altheadr/>


    <div className="min-h-screen  flex items-center justify-center bg-white p-24">
      <div className="w-full max-w-lg  shadow-lg rounded-sm">
        
        
        <div className="flex flex-col items-center bg-white">
          <img src={profilePlaceholder} className="size-40" />
          <h1 className="mt-4 text-xl text-green-600 font-semibold">{userData?.firstName} {userData?.lastName}</h1>
          <p className="text-green-500">{userData?.email}</p>

          </div>
        <div className="flex flex-col items-center bg-white">
          <label className="text-2xl text-green-600">
            Link Title 

        <input type="text"  
            placeholder="Add new link"
            value=""
            className="w-full border p-2 rounded-lg"  />
        
          </label>
          <label className="text-2xl text-green-600">
            Description  

        <input type="text"  
            placeholder="Link Description"
            value=""
            className="w-full border p-2 rounded-lg"  />
         
          </label>
          <label className="text-2xl text-green-600">
            Add New Link 

        <input type="text"  
            placeholder="Add new link"
            value=""
            className="w-full border p-2 rounded-lg"  />
          <button type="submit"
            // onClick={}
            className="mt-2 w-md h-10 bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center">Submit</button>
          </label>
        
          </div>
          <hr className="mt-5 bg-red-600"/>
        <div className="flex flex-col items-center mt-4 bg-gray-400 text-red-600">
          <label className="text-2xl">
            Delete Link 

        <input type="text" 
            placeholder="Delete Link By Name"
            value=""
            className="w-full border p-2 rounded-lg"  />
          <button type="submit"
            // onClick={}
            className="mt-2 w-md h-10 text-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 flex items-center justify-center">Submit</button>
          </label>
          <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Are You Sure You Want To Delete Link ?
            </label>
          </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
     </div>
  );
}

export default Profile