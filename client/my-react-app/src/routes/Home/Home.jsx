import React, { useState } from 'react';
import './home.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/shop")
  }
  return (
    <div className="home">
       
      <div className="left">
         
         <div className="content">
         <marquee><span> Offer upto  70%  &nbsp;&nbsp;&nbsp; Offer upto 70% &nbsp;&nbsp;&nbsp;  Offer upto  70%  &nbsp;&nbsp;&nbsp; Offer upto 70%</span></marquee>
            
            <h1>
              Unleash Your Style with our new Collections
            </h1>
            <h2>Be Stylist, Be Bold and  Write your own Stories</h2>
            <div className="btn">
                <button onClick={handleClick}>Shop Now &nbsp;   →</button>
            </div>

        </div>
      </div>
      <div className="right">
      <div className="imageContainer">
           <img src='shopping.jpg' width="470px" height="400px"/>
         </div>
      </div>
     
    </div>
  );
};

export default Home;