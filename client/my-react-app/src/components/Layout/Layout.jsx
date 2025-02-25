import React, { useContext, useEffect } from 'react';
import './layout.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../Context/Context';

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};
const RequiredAuthentication = ()=>{
  const {currentUser} = useContext(AuthContext)
  const navigate =useNavigate()
  
  useEffect(()=>{
    if(!currentUser){
      navigate('/login')
    }
  },[currentUser, navigate])
  if(!currentUser){
    return null
  }
    return (<div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>);
    
  
 
}

export {Layout, RequiredAuthentication};