import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    })
      .then(res => console.log(res));
  };

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
        email: loginEmail
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    })
      .then(res => console.log(res));
  };

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    })
      .then(res => setData(res.data));
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)} />
        <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)} />
        <button onClick={register}>submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input placeholder='username' onChange={e => setLoginUsername(e.target.value)} />
        <input placeholder='password' onChange={e => setLoginPassword(e.target.value)} />
        <button onClick={login}>submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>submit</button>
        {
          data ? <h1>Welcome back {data.username}</h1> : null
        }
      </div>

    </div>
  );
}

export default App;