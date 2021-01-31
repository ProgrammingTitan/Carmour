import React , {useContext} from 'react'
import {useHistory, Link} from 'react-router-dom';
import userContext from '../context/UserContext';
import './Auth.css';

export default function AuthOptions() {
    const {userData, setUserData} = useContext(userContext);

    const history = useHistory();

    const register = () => history.push("/register");
    const accountOptions = () => history.push(`/accountOptions/${userData.user.id}`);

    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");

    }

    return (
        <nav className="auth-options"> 
            {userData.user ? 
            <>
            <button onClick={accountOptions}>My Account</button>
            <button onClick={logout}>Log Out</button> 
            </>
            : 
            <>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            </>
            }
            {console.log(userData.user)}
            
        </nav>
    );
}
