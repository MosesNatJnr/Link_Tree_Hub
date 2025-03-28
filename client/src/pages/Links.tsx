import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { baseUrl } from "../utils/constants";
import { UserData } from "./Profile";
import { logo } from "../assets/images";

const Links = () => {
  const { username } = useParams(); // Extracts parameter from URL
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${baseUrl}/api/user/profile/${username}`
        );
        setUserData(response.data);
        console.log(response);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]); // Dependency array ensures the effect runs when username changes

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>{error}</div>;
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-10 px-5">
      <Link to={'/'}>
      <img src={logo} className="size-14" alt="" />
      </Link>
      <p className="text-6xl font-bold">{userData?.firstName} {userData?.lastName}</p>
      <div className="flex flex-col w-[90%] gap-6">
      {userData?.links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col p-4 rounded-lg justify-center border-2 containr"
        >
          <h1 className="flex gap-4 items-center">{link?.title}</h1>
          <h1>{link?.description}</h1>
          <a
            href={link?.url}
            className="border w-20 text-center p-1 mt-4 rounded-md"
          >
            Let's Go
          </a>
        </div>
      ))}
      </div>

    </div>
  );
};

export default Links;
