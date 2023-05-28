import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let token = '';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/login', {
                email: email,
                password: password

              }).then(res => {
                token = res.data.accessToken;
                console.log(token);
                navigate("/dashboardlogin");
              });

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
          <div className="columns mt-5 is-centered">
              <div className="column is-half">
                  <div className="block"><p className="title">Log in to CheckUp</p></div>
                      <form onSubmit={Auth} className="box">
                          <p className="has-text-centered">{msg}</p>
                          <div className="field mt-5">
                              <label className="label">Email</label>
                              <div className="controls">
                                  <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                              </div>
                          </div>
                          <div className="field mt-5">
                              <label className="label">Password</label>
                              <div className="controls">
                                  <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                              </div>
                          </div>
                          <div className="field mt-5">
                              <button className="button is-success is-fullwidth">Login</button>
                          </div>
                      </form>
                  </div>
              </div>
    )
}

export default Login
