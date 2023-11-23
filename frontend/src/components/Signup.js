import React, { useEffect } from 'react'
import "../styles/Signup.css";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { authActions } from '../store/authSlice';
import { apiActions } from '../store/apiSlice';
// import { base_url } from './base';

function Signup() {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const notification = useSelector((state)=>state.api.signupNotification)
    const email = useSelector((state)=>state.api.email)

    let [data, setData] = useState({

        username : "",
        mobile : "",
        email : "",
        password : "",
        confirm_password : ""
    })

    function changeHandler(e)
    {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    function signupHandler(e)
    {
        e.preventDefault();
        console.log(data);
        axios.post(`http://localhost:8081/api/v1/auth/signup`,data)
        .then((res)=>{
            console.log(res.data, "signup email")
            console.log(res.data.email, "signup email")
            
            if(res.data === "User Not Found" || res.data === "Invalid credentials" || res.data === 'User Already Exist' || res.data === 'Password mismatch')
            {
                
                dispatch(apiActions.update(res.data))
                setTimeout(() => {
                    dispatch(apiActions.update(""))
                }, 5000)
            }
            else
            {
                dispatch(apiActions.setEmail(data.email))
                const newData = 
                {
                    folderName : data.email
                }

                const newData2 = 
                {
                    folderName : data.email,
                    filename : data.email,
                    data : data
                }

                console.log(newData2)
                axios.post(`http://localhost:8081/api/v1/create/createFolder`, newData)
                .then(()=>{
                    axios.post(`http://localhost:8081/api/v1/addfile/createFile`, newData2)
                })
                Navigate("/login")
            }
            
        })
        
    }

    function moveToLoginPage()
    {
        Navigate("/login")
    }

    useEffect(()=>{

    },[dispatch, email])

    

    
  return (<div className='signup'>
            <div className="signuppage-con" >
                
                <form className='signuppage-form'autoComplete='off' onSubmit = {signupHandler}>
                    <input type="text" placeholder="Enter username" name="username" onChange = {changeHandler} required/>
                    <input type = "number" placeholder="Enter mobile number" name = "mobile" onChange = {changeHandler} required/>
                    <input type="email" placeholder="Enter your email" name="email" onChange = {changeHandler} required/>
                    <input type="password" placeholder="Enter your password" name="password" onChange = {changeHandler} required/>
                    <input type="password" placeholder="confirm your password" name="confirm_password" onChange = {changeHandler} required/>
                    <button>Sign up</button>
                    <p>
                        <span className="signup-already">Already have an account ?</span>
                        <span onClick = {moveToLoginPage} className="login-button">Log in</span>
                    </p>
                    
                </form>
            </div>

            {notification &&
            <div className='signup-notification'>
                <p>{notification}</p>
            </div>
            }
        </div>
  )
}

export default Signup;