/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [token2, setToken] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
      try{
        const response = await axios.get('http://localhost:8000/users', {
            headers: {
                Authorization: `Bearer ${token2}`
            }
        });
          setUsers(response.data);
      } catch (error) {
          if (error.response) {
              navigate("/login");
          }
      }
    }

    return (
        <div className="container mt-5">
            <h1>Welcome Back: </h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
