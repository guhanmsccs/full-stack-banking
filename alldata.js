import { useEffect, useState } from 'react';
import './userdetails.css'; 

export default function Adminhome({userData}) {
  const[data,setData]=useState([]);


  useEffect(()=>{
    fetch("http://localhost:5000/alluser",{
      method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,userData);
      setData(data.data);
    })
  },[]);

  const logout=()=>{
    window.localStorage.clear();
    window.location.href = "./login";
  }
  return(
    <div className="all" style={{width:"auto"}}>

      <table style={{width:400}}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>User Type</th>
          <th>Age</th>
          
          
        </tr>
        {data.map((i)=>{
          return(
            <tr>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.usertype}</td>
              <td>{i.age}</td>
              
            </tr>
          )
        })}
      </table>
      
        <button onClick={logout}>Log out</button>
      <p>Loading user data...</p>
  </div>
  );
}
