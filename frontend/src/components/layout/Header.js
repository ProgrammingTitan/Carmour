import React , {useContext, useState} from 'react'
import {useHistory, Link} from 'react-router-dom';
import userContext from '../context/UserContext';
import './Header.css';
import AuthOptions from '../auth/AuthOptions';
import logo from '../../data/logo.png';

export default function Header() {
    const [toggle, setToggle] = useState();
    const {userData, setUserData} = useContext(userContext);

    const logout = () => {
      setUserData({
          token: undefined,
          user: undefined
      });
      localStorage.setItem("auth-token", "");

  }
    const history = useHistory();
    // setToggle(false);

    return (
        <>
        
      
      
      <div className="desktop-nav">
         
      <header className="header">
      <a href="/"><img src={logo}/>Carmour</a>
      <div>
      <ul className="menu-items">
      <li><a href="/Mission">Our Mission</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Shop">Shop Devices</a></li>
            {userData.user ?
            <>
              <li><a href={`/accountOptions/${userData.user.id}`}>My Account</a></li>
              <li><a href={`/MyVehicles/${userData.user.id}`}>My Vehicles</a></li>
              <li onClick={logout}><a href="/">Log Out</a></li>
            </>
            :
            <>
              <li><a href="/Login">Login</a></li>
              <li><a href="/Register">Register</a></li>
            </>
            }
      </ul>
      </div>
      </header>
      </div>


      <div className="mobile-nav">
      <div className="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div className="hamburger"><div></div></div>
    <div className="mobile-header-title"><a href="/"><img className="mobile-logo" src={logo}/><h1>Carmour</h1></a></div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li><a href="/Mission">Our Mission</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Shop">Shop Devices</a></li>
            {userData.user ?
            <>
              <li><a href={`/accountOptions/${userData.user.id}`}>My Account</a></li>
              <li><a href={`/MyVehicles/${userData.user.id}`}>My Vehicles</a></li>
              <li onClick={logout}><a href="/">Log Out</a></li>
            </>
            :
            <>
              <li><a href="/Login">Login</a></li>
              <li><a href="/Register">Register</a></li>
            </>
            }
           
          </ul>
        </div>
      </div>
    </div>
  </div>
  

      {/* {toggle ?
      <div>
           <div class="menu-btn open">
        <div class="menu-btn__lines" onClick={() => setToggle(!toggle)}></div>
      </div>
      <ul class="menu-items">
      <li><a href="#" class="menu-item">Menu</a></li>
        <li><a href="#" class="menu-item">About</a></li>
        <li><a href="#" class="menu-item">Holidays</a></li>
        <li><a href="#" class="menu-item">Order</a></li>
      </ul>
      </div>
      :
      <div class="menu-btn">
      <div class="menu-btn__lines" onClick={() => setToggle(!toggle)}></div>
    </div>
        } */}
        
        
        </div>
        
        <div className="header-space">
        
        </div>
    </>
    )
}
