import React, {useEffect, useContext} from 'react'
import {useHistory} from "react-router-dom";
import UserContext from '../context/UserContext';
import kia from '../../data/kia.PNG';
import mercedes from '../../data/mercedes.png';
import jeep from '../../data/jeep.png';
import './VehicleWidget.css'

let imgsrc = null;

export default function VehicleWidget() {
    const {userData} = useContext(UserContext);
    const history = useHistory();
    useEffect(() => {
        if(!userData.user){
            // history.push('/login');
        }


    })

    return (
        <div className="vehicles">
            
            {
                userData.vehicles ?
                <>
                <h2>My Vehicles:</h2>
                {
            userData.vehicles.map((vehicle,key) => (
                <a className="v-link" href={`/Vehicle/${vehicle._id}`}>
                <div className="vw-row" key={key}> 
                <div className="vw-col">
                    {/* {(vehicle.brand === "Kia") ? imgsrc = {kia} : imgsrc = {mercedes}} */}
                    <img src={(vehicle.brand === "Kia") ? kia :(vehicle.brand === "Mercedes") ? mercedes : jeep}/>    
                </div>   
                <div className="vw-col">
                    <h3>{vehicle.brand} {vehicle.model} {vehicle.year}</h3>
                    <h4>Recorded Footage ({vehicle.previousFeed.length} clips)</h4>
                    {/* <h4>Belongs to: {userData.user.displayName}</h4> */}
                </div>
            </div>
            </a>
            ))
                }
                </>
           
            :
            <p>Loading</p>
            }
        </div>
    )
}
