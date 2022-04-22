import './App.css';

import React, { useState, useEffect, useSelector } from "react";
import axios from "axios";

import Dashboard from './Dashboard';
import NavBar from './NavBar';
import Recommendations from './Recommendations';
import { Navigate } from "react-router-dom";


function App(){
    const [status, setStatus] = React.useState(0);

    React.useEffect(() => {
        axios.get('/api/usertrip', {
            headers: {
                Authorization: `bearer ${sessionStorage.getItem('user-token')}`
            }
        })
          .then((response) => {
            console.log(response.data);
            if (!response.data.length) setStatus(1);
        })
        .catch(error => {
            console.error(error.response.data.message);
        })
    }, []);

    if (!sessionStorage.getItem('user-token'))
        return <Navigate to='/login' />

    return(
        <>
            <NavBar page="home" />
            <Dashboard status={status}/>
            <Recommendations />
        </>
    );
}

export default App;