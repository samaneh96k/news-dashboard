import { createContext } from "react";

export const UserContext = createContext({
    fullname: "",
    setFullname: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    confirmpassword: "",
    setPassword: () => {},
    setConfirmPassword: () => {},
    policy: "",
    setPolicy: () => {},
    validator: null,
    handleLogin: () => {},
    handleRegister: () => {},
    handleVerify: () => {},
    mobile:"",
    setMobile: () => {},  
    verifycode:"",
    setverifycode: () => {},  

});
