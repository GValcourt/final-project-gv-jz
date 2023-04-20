import React from "react";
import {useSelector} from "react-redux";
import Login from "./login";

function LogInComponent(){
    const token = useSelector(state => state.token);
    if(!token){
        return (
            <Login/>
        );
    }
}

export default LogInComponent;