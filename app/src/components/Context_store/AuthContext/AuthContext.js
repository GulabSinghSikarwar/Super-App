import React from "react";
import { useState } from "react";


const defaultValues = {

    login: (loginDetails) => {

    },
    logout: () => {

    },
    signup: (signupDetails) => {

    },
    token: {
        token: null,
        setToken: (newToken) => {

        }

    },
    isLoggedIn: false
}
const AuthContext = React.createContext();
export default AuthContext;
