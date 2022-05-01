import "../styles/BottomNav.css";

import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function BottomNav(props){
    if(props.page=="categories"){
        return(
            <>
            <div id="buttonsWrapper">
                <div id="buttons">
                    <Link to="/">   
                        <button className="navButton2" id="backBtn">
                            <div className="btnText">
                                Back
                            </div>
                        </button>
                    </Link>
                    <Link to="/startplanning">
                        <button className="navButton1" id="nextBtn">
                                <div className="btnText">
                                    Next
                                </div>
                        </button>
                    </Link>
                </div>
                <Outlet />
            </div>
            
            </>
        );
    }
    else if(props.page=="startplanning"){
        return(
            <>
            <div id="buttonsWrapper">
                <div id="buttons">
                    <Link to="/categories">    
                        <button className="navButton2" id="backBtn">
                            <div className="btnText">
                                Back
                            </div>
                        </button>
                    </Link>
                    <Link to="/results">
                        <button className="navButton1" id="nextBtn">
                                <div className="btnText">
                                    Next
                                </div>
                        </button>
                    </Link>
                </div>
                <Outlet />
            </div>
            
            </>
        );
    }

} 