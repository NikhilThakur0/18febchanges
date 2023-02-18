//import React from 'react';
import * as Yup from "yup";
 
export const signUpSchema=Yup.object({
    Fname:Yup.string().min(2).max(25).required("Please enter your First name"),
    Lname:Yup.string().min(2).max(25).required("Please enter your Last name"),
    Phone_no:Yup.string().min(10).max(10).required("Please enter a valid mobile number"),
    email:Yup.string().email().required("Please enter a valid email"),
    company:Yup.string().min(2).max(25).required("Please enter your Company Name"),
    city:Yup.string().min(2).max(25).required("Please enter your City Name"),
    password:Yup.string().max(15).required("Please enter your password"),
    cfmpassword:Yup.string().required("Please enter the password again to confirm").oneOf([Yup.ref("password"),null],"Password must match")
});