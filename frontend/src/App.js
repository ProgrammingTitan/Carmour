import React , {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route, useParams} from 'react-router-dom';
import Axios from 'axios';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserContext from './components/context/UserContext';
import AccountOptions from './components/pages/AccountOptions';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/layout/Footer';

import "./App.css";
import AboutTeam from './components/pages/AboutTeam';
import VehicleWidget from './components/layout/VehicleWidget';
import MyVehiclesPage from './components/pages/MyVehiclesPage';
import VehiclePage from './components/pages/VehiclePage';

export default function App() {

    const [userData, setUserData] = useState({
        token: undefined,
        id: undefined,
        user: undefined,
        vehicles: []
    })

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            
            if(token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await Axios.post("http://localhost:5000/api/users/tokenIsValid", null, {headers: {"x-auth-token" : token}});

            
            if(tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/api/users/",  {headers: {"x-auth-token" : token}});

                // setUserData({
                //     token,
                //     user: userRes.data 
                // })
               

                const vehicleRes = await Axios.get("http://localhost:5000/api/vehicles/", {headers: {"x-auth-token":token}});
                setUserData({
                    token,
                    user: userRes.data,
                    vehicles: vehicleRes.data 
                });

                console.log(vehicleRes.data);
                console.log(userData.vehicles);

            }
        };

        checkLoggedIn();
    }, []);

    return (
        <>
        <BrowserRouter>
        <UserContext.Provider value={{userData, setUserData}}>
        < Header />
        <div >
        <Switch>
            <Route
                path="/" exact
                component= {Home}
            />
            <Route
                path="/Mission" 
                component= {AboutUs}
            />
            <Route
                path="/About" 
                component= {AboutTeam}
            />
            <Route
                path="/Login" 
                component= {Login}
            />
            <Route
                path="/Register" 
                component= {Register}
            />
            <Route
                path="/MyVehicles/:id" 
                component= {MyVehiclesPage}
            />
            <Route
                path="/Vehicle/:id" 
                render={ (match) => <VehiclePage 
                    match = {match}
                   
            />
                }
                />
            <Route
                path="/accountOptions/:id" 
                render={ (match) => <AccountOptions 
                    token = {userData.token}
                    match = {match}
                   
                />
                }
                />
                <Route 
                    path="/Menu"
                    component ={AboutUs}
                />
        </Switch>
        </div>
        </UserContext.Provider>
        </BrowserRouter>
        <Footer />
        </>
    )
}
