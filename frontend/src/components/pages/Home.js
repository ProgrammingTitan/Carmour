import React, {useEffect, useContext} from 'react'
import {useHistory} from "react-router-dom";
import UserContext from '../context/UserContext';
import VehicleWidget from '../layout/VehicleWidget';
import signupphoto from '../../data/signupphoto.jpg';
import buykitphoto from '../../data/buykitphoto.jpg';
import './Home.css';

export default function Home() {
    const {userData} = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        if(!userData.user){
            // history.push('/login');
        }
    })

    return (
        <div className="container-s">
            <div className="ad1-wrap">
                <img src = {buykitphoto} />
                <h2>Need a Kit for Your Car?</h2>
                <button>Shop Systems</button>    
            </div>
            {userData.user ? 
            <VehicleWidget /> 
            // <p>hi</p>
            : 
            <>
            <div className="ad1-wrap">
                <img src = {signupphoto} />
                <h2>Never Worry About Your Car Again</h2>
                <button>Sign Up Now</button>    
            </div>
            </>
            }
            
        </div>
    )
}
