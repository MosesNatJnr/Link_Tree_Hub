import { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants";
import Loader from "../components/Loader";
import api from "../utils/api";

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
    </div> :
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        
        
        <div className="flex flex-col items-center">

          <input type="file" accept="image" placeholder="client\src\media\profilePlaceholder.jpg"className="w-20 h-20 rounded-full object-cover" />
          <h2 className="mt-4 text-xl font-semibold">{userData?.firstName} {userData?.lastName}</h2>
          <p className="text-gray-500">{userData?.email}</p>
        
        </div>

        <hr className="my-4" />

        {/* Links Section */}


        <hr className="my-4" />

        {/* Add Link Input */}

        <div className="mb-4">
          <input
            type="text"
            placeholder="Add new link"
            value=""
            className="w-full border p-2 rounded-lg"
          />
          <button type="submit"
            // onClick={}
            className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center"
          >
          Add Link
          </button>
        </div>

        {/* Delete Link Input */}
        <div className="bg-gray-500 text-red-700">
          <input
            type="text"
            placeholder="Delete link by name"
            // value={}
            className="w-full border p-2 rounded-lg"
          />
          <button
            // onClick={}
            className="mt-2 w-full bg-white text-red-500 py-2 rounded-lg hover:bg-red-600 hover:text-white flex items-center justify-center"
          >
          </button>
          <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Are You Sure You Want To Delete Link ?
            </label>
        </div>

        {/* Logout */}

        <div className="mt-6 flex items-center justify-center text-red-500 cursor-pointer hover:text-red-700">
          {/* <FiLogOut className="text-xl mr-2" /> */}
          <span className="text-sm">Log Out</span>
        </div>
      </div>
    </div>
  );
}

export default Profile