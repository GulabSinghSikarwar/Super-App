import React, { useState } from "react";
import AuthContext from "./AuthContext";


const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const login = (loginDetails) => {
        


    }
    const signUp = (signUpDetails) => {
        
        fetch('http://localhost:3000/register ').then((resp)=>{
            return resp.json()
        }).then((data)=>{
            console.log(data);
        })

    }
    const logout = () => {

    }
    const values = {
        login: login,
        signup: signUp,
        logout: logout,
        token: {
            token: token,
            setToken: setToken
        },
        isLoggedIn: !!token
    }


    return (
        <div>
            <AuthContext.Provider>
                {props.children}
            </AuthContext.Provider>

        </div>
    )
}