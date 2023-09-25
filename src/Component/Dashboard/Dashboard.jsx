import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    let url = "http://localhost:5000/user/dashboard"
    let token = localStorage.token
    axios.get(url, {
      headers:{
        Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
         "Accept": "application/json"
      }
    });
  }, []);
  return (
    <div>
  dashboard
    </div>
  )
}

export default Dashboard