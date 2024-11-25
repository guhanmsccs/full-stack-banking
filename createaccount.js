import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import './create.css';
import axios from "axios";

function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true);
    const [usertype, setUsertype] = useState('');
    const [secretkey, setSecretkey] = useState("");

    const navigate = useNavigate(); 

    async function create(e) {
        e.preventDefault();

        if (usertype === "Admin" && secretkey !== "Secretkeys") {
            alert("Invalid Admin secret key");
            return;
        }

        if (!usertype) {
            alert("Select user type");
            return;
        }

        if (name === "") {
            alert("Please enter name");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (!phone || phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        if (!age || age.length > 2) {
            alert('Please enter a valid age (less than 100)');
            return;
        }

        if (!gender) {
            alert('Please select gender');
            return;
        }

        if (!password || password.length < 8) {
            alert('Please enter an 8-digit password');
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/createaccount", { 
                name, email, phone, age, gender, password, usertype, secretkey 
            });
            console.log(response.data);
            alert("Account created successfully");
            setShow(false);

            
            navigate("/login");

        } catch (error) {
            alert("Error while creating account: " + (error.response?.data?.error || error.message));
        }

        console.log('Create Account Consoles end');
    }

    function reset() {
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setGender('');
        setPassword('');
        setSecretkey('');
        setShow(true);
    }

    const Logout = () => {
        window.localStorage.clear();
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">STATE BANK <span> OF INDIA</span></div>
                <div className="form">
                    {show ? (
                        <form onSubmit={create}>
                            <div className="input-container">
                                <label htmlFor="">User:</label>
                                <input type="checkbox" name="Usertype" value='User' onChange={(e) => setUsertype(e.target.value)} /> 
                                <label htmlFor="">Admin:</label>
                                <input type="checkbox" name="Usertype" value='Admin' onChange={(e) => setUsertype(e.target.value)} /> 
                            </div>
                            {usertype === "Admin" && (
                                <div className="input-container">
                                    <label>Secretkey: </label>
                                    <input type="text" placeholder="Secretkey" value={secretkey} onChange={(e) => setSecretkey(e.target.value)} />
                                </div>
                            )}
                            <div className="input-container">
                                <label>Name: </label>
                                <input type="text" name="uname" value={name} onChange={e => setName(e.target.value)} required />
                            </div>
                            <div className="input-container">
                                <label>Email: </label>
                                <input type="text" name="uname" value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className="input-container">
                                <label>Phone: </label>
                                <input type="text" name="uname" value={phone} onChange={e => setPhone(e.target.value)} required />
                            </div>
                            <div className="input-container">
                                <label>Age: </label>
                                <input type="number" name="uname" value={age} onChange={e => setAge(e.target.value)} required />
                            </div>
                            <div className="input-container">
                                <label>Gender: </label>
                                <select id="Size" name="Size" value={gender} onChange={e => setGender(e.target.value)} required>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label>Password: </label>
                                <input type="password" name="pass" required value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="button-container">
                                <button type="submit">Create Account</button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <h4 id="success">Successfully created</h4>
                            <div className="button-container">
                                <button onClick={reset}>Create another Account</button>
                                <button onClick={Logout}>Logout</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;