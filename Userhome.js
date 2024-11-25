import './userdetails.css'; 

export default function Userhome({userData}) {

  const logout=()=>{
    window.localStorage.clear();
    window.location.href = "./login";
  }
  return(
    <div className="all">
    {userData ? (
      <div className="userDataBox">
        <h1 className="heading">Welcome, {userData.name}</h1>
        <p><strong>Balance:</strong> {userData.balance}</p><br/>
        <button onClick={logout}>Log out</button>
      </div>
    ) : (
      <p>Loading user data...</p>
    )}
  </div>
  )
}
