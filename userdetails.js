import { useEffect, useState } from "react";
import axios from "axios";
import './userdetails.css'; // Correct import
import Userhome from "./Userhome"; 
import AllData from "./alldata";

export default function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [admin, setAdmin] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .post("http://localhost:5000/userdetails", { token })
      .then((res) => {
        console.log(res.data);
        
        if (res.data.data.usertype === "Admin") {
          setAdmin(true);
        }
        if (res.data.status === "ok") {
          setUserData(res.data.data); // Access the data field
        } else {
          console.error("Error fetching user details:", res.data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching user details:", err);
      });
  }, [token]);

  return (
    admin ? <AllData/> : <Userhome userData={userData} />
  );
}
