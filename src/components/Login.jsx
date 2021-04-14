import React from 'react';
import '../css/Login.css';
import { loginUrl } from '../spotify';
const Login = () => {
    return (
        <div className="login">
            <h1>Login Page</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/800px-Spotify_logo_horizontal_black.jpg" alt=""/>
            <a href={loginUrl}>Login With Spotify</a >
        </div>
    );
};

export default Login;

