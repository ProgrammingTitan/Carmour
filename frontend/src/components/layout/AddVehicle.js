import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../context/UserContext';
import ErrorNotice from '../misc/ErrorNotice';
const PORT = process.env.PORT || 'http://localhost:5000' ;

export default function AddVehicle() {

    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [userID,setUserID] = useState();
    const [error, setError] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("auth-token");
        let userIDD = localStorage.getItem("user-id")
        
        try{
        const newVehicle = {
            brand,
            model,
            year,
            userID : userIDD,
        };

        await Axios.post(
            `${PORT}/api/vehicles`, newVehicle, { 
            headers: {
                "x-auth-token" : token,
            },
    
        }
        );

    
        setError("Upload Successful!");
        window.location.reload(false);
        
    
       
    }catch (err) {
        console.log(err);
        err.response.data.msg && setError(err.response.data.msg);
    }

    };


    return (
        <div className="page">
            <h1 className="control-panel-heading">Add New Vehicle</h1>
            {error && <ErrorNotice message={error} clearError={ () => setError(undefined)} /> }
            <form className="form" onSubmit={submit}  enctype="multipart/form-data">
                <label htmlFor="brand">Brand</label>
                <input id="brand" type="text" onChange = {e => setBrand(e.target.value)}/>
                
                <label htmlFor="model">Model</label>
                <input id="model" type="text" onChange = {e => setModel(e.target.value)}/>

                <label htmlFor="year">Year</label>
                <input id="year" type="text" onChange = {e => setYear(e.target.value)}/>

                {/* <label htmlFor="type">Type</label>
                <input id="type" type="text" onChange = {e => setType(e.target.value)}/>


                <label htmlFor="iamgeURL">Image URL: </label>
                <input id="imageURL" type="text" onChange = {e => setImageURL(e.target.value)}/> */}
                {/* <label htmlFor="file">Upload Image</label>
                <input type="file" id="file"
                       name="image"  required
                       
                       onChange = {e => {const file = e.target.files[0]; 
                    setFile(file);} }
                       ></input>
                 */}
                <input type = "submit" value="Upload" />
            </form>
        </div>
    );
}
