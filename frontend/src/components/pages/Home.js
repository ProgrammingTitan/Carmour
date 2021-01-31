import React, {useEffect, useContext} from 'react'
import {useHistory} from "react-router-dom";
import UserContext from '../context/UserContext';
import VehicleWidget from '../layout/VehicleWidget';
import signupphoto from '../../data/signupphoto.jpg';
import buykitphoto from '../../data/buykitphoto.jpg';
import './Home.css';
import { Spinner, Jumbotron, Button } from 'reactstrap';

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
            <div className="main-ad">
             <Jumbotron style={{'background-color':'rgba(0,0,0,0.8)','background-image':'url(\'https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1560/tembnkufjurrwrbxqce8\')','min-height':'540px','color':'orange','background-repeat':'no-repeat','background-position':'center','background-size':'cover'}}>
        <h1 className="display-4">The Next Generation of Car Security</h1>
        <p className="lead">Learn how you can keep your vehicles safe with this inexpensive and modern solution!</p>
        <Button href="/shop" style={{backgroundColor : ' rgba(246,148,29,0.9)'}}>Shop Now</Button>{' '}
      </Jumbotron>
      </div>
            <div className="ad1-wrap">
                <img src = {buykitphoto} />
                <h2>Need a New Kit?</h2>
                <button><a style={{color:'inherit'}} href="/shop">Shop Systems</a></button>    
            </div>
            {userData.user ? 
            <VehicleWidget /> 
            // <p>hi</p>
            : 
            <>
            <div className="ad2-wrap">
                <img src = {signupphoto} />
                <h2>Never Worry About Your Car Again</h2>
                <button><a style={{color:'inherit'}} href="/Register">Sign Up Now</a></button>    
            </div>
            </>
            }
            
        </div>
    )
}
