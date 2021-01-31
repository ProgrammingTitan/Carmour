import axios from 'axios';
import React, { Component } from 'react';
import UserContext from '../context/UserContext';
import AddVehicle from '../layout/AddVehicle';
import VehicleWidget from '../layout/VehicleWidget';

export default class AccountOptions extends Component {

    

    constructor(props){
        super(props);
        this.state ={
            user : {},
            token: props.token,
            gotData: false
        }
    }

    componentDidMount(){
        const PORT = process.env.PORT || 'http://localhost:5000' ;
        console.log("token" + this.state.token);
        let token = localStorage.getItem("auth-token");

        const url = `${PORT}/api/users/${this.props.match.match.params.id}`;
        axios.get(url,  { 
            headers: {
                "x-auth-token" : token,
            }}, 
            this.state.id,)
        .then((res) => {
            this.setState({
                user: res.data,
                gotData: true
            });
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });


        
    }


    render() {
        return (
            <>
            {this.state.gotData ?
            <>
            <div>
                <div>
                    <img /> 
                </div>
                <div>
                    <h3>My Account: </h3>
                    <h2>{this.state.user.displayName}</h2>
                    <h3>{this.state.user.email}</h3>
                    <h3>{this.state.user.phoneNumber}</h3>
                </div>
            </div>
            {/* <div>
                <VehicleWidget />
            </div> */}
            <div>
                <AddVehicle />
            </div>
            </>
            :
            <h4>You are not signed in!</h4>
            }
            </>
        )
    }
}
