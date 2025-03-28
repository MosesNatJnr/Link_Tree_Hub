import { useEffect, useState } from "react";
import { baseUrl } from "../utils/constants";
import Loader from "../components/Loader";
import api from "../utils/api";
import Altheadr from "../components/Altheadr";
import Footer from "../components/Footer";
import { profilePlaceholder } from "../assets/images";
import { Link, useNavigate } from "react-router-dom";

export interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  links: [{
    url: string;
    description: string;
    title: string;
  }];
}
const Profile = () => {
  const [newlinkMessage, setNewLinkMesssage] = useState("");
  const [delLinkMessage, setDelLinkMesssage] = useState("");
  const [delTitle, setDelTitle] = useState("");
  const [userData, setUserData] = useState<UserData>();
  const [newLink, setNewLink] = useState({
    url: "",
    description: "",
    title: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [delError, setDelError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await api.get(`${baseUrl}/api/user/profile`);
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error: any) {
        if (error.status === 401) {
          localStorage.removeItem("token");
          navigate("/");
        }
        console.error(error);
      }
      setLoading(false);
    };
    getUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewLink((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (
     newLink.title.trim() === "" ||
     newLink.description.trim() === "" ||
     newLink.url.trim() === ""
    ) {
      setError("All fields are required");
      return;
    }
    try {
      console.log("trying to submit...");
      
      await api.post(`/api/user/add-link`, newLink)
        setNewLink({
          url: "",
          description: "",
          title: "",
        });
        setNewLinkMesssage("Link added successfully");
      
    } catch (error:any) {
      setError(error.message);
      console.error(error.message);
      
    }
  };
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setDelError("");
    if (delTitle.trim()==="") {
      setDelError("A title must be specified");
      return;
    }
    try {
      setLoading(true);
      await api.delete(`/api/user/delete/${delTitle}`);
        setDelLinkMesssage("Link deleted successfully");
        setDelTitle("");
    } catch (error:any) {
      setDelError(error.response.data.message);
    
    }
    setLoading(false);
  }

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <Altheadr />
      <div className="min-h-screen  flex items-center justify-center bg-white p-24">
        <div className="w-full max-w-lg  shadow-lg rounded-sm">
          <div className="flex flex-col items-center bg-white">
            <img src={profilePlaceholder} className="size-40" />
            <h1 className="mt-4 text-4xl text-green-600 font-semibold">
              {userData?.firstName} {userData?.lastName}
            </h1>
            <p className="text-green-500">{userData?.email}</p>
          <Link to={`/links/${userData?.userName}`} className="text-sm bg-green-600 text-white p-4 py-2 mt-2 rounded-full">View My Link Tree</Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-white gap-2"
          >
            <label>
              Title
              <input
                type="text"
                placeholder="Add Title"
                value={newLink.title}
                name="title"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
            </label>
            <label>
              Description
              <input
                type="text"
                name="description"
                onChange={handleChange}
                placeholder="Add Description"
                value={newLink.description}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </label>
            <label>
              URL
              <input
                type="text"
                placeholder="Add URL"
                name="url"
                value={newLink.url}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
            </label>
            {error ? (
                <p className="text-red-500">{error}</p>
              ) : 
              newlinkMessage ? (
                <p className="text-green-600">{newlinkMessage}</p>
              ) : (
                <p className="h-[1lh]"></p>
              )}
            <button
              type="submit"
              className="mt-2 w-md self-center h-10 bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 flex items-center justify-center"
            >
              Submit
            </button>
          </form>
          <hr className="mt-5 bg-red-600" />
          <form onSubmit={handleDelete} className="flex flex-col mt-4 text-red-600">
            <label className="">
              Delete Link
              <input
                type="text"
                onChange={(e) => setDelTitle(e.target.value)}
                placeholder="Delete Link By Name"
                value={delTitle}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
              </label>
              {delError ? (
                <p className="text-red-500">{delError}</p>
              ) : 
            delLinkMessage ? (
                <p className="text-green-600">{delLinkMessage}</p>
              ) : (
                <p className="h-[1lh]"></p>
              )}
              <button
                type="submit"
                // onClick={}
                className="mt-2 w-md self-center h-10 text-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 flex items-center justify-center"
              >
                Submit
              </button>
            {/* <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Are You Sure You Want
              To Delete Link ?
            </label> */}
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
