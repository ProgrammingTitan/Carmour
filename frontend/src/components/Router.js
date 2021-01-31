import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../App.css';
import Home from './pages/Home';
import AboutUs from './AboutUs';
import AboutTeam from './AboutTeam';
import ShowProfiles from '../ShowProfiles';
import Vehicles from './Vehicles';
import VechicleLivestream from './VehicleLivestream'
import CreateProfile from '../CreateProfile';
import VechicleLocation from './VehicleLocation';
import UserHistory from './UserHistory';
class Router extends React.Component{

    render(){

        return(
    <BrowserRouter>
            <Switch>
            <Route path="/" component ={Home} exact></Route>
            <Route path="/AboutUs" component ={AboutUs} exact></Route>
            <Route path="/Team" component ={AboutTeam} exact></Route>
            <Route path="/CreateProfile" component ={CreateProfile} exact></Route>
            <Route path="/ShowProfiles" component ={ShowProfiles} exact></Route>
            <Route path="/Vehicles" component ={Vehicles} exact></Route>
            <Route path="/Vehicles/Optima" component ={VechicleLivestream} exact></Route>
            <Route path="/Vehicles/Optima/Location" component ={VechicleLocation} exact></Route>
            <Route path="/UserHistory" component ={UserHistory} exact></Route>
            </Switch>

    
    </BrowserRouter>
        );
    }
}

export default Router; 