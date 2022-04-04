import './App.css';

import React from "react";

import Dashboard from './Dashboard';
import NavBar from './NavBar';

function App(){

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((res) => setData(res.message));
    }, []);

    return(
        <>
            <div>
                {!data ? "Loading..." : data}   
            </div>
            <NavBar />
            <Dashboard status={1}/>
        </>
    );
}

export default App;