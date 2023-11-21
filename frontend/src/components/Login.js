
import "../styles/Login.css";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { apiActions } from "../store/apiSlice";

function Login() {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const notification = useSelector((state) => state.api.loginNotification)

    let [data, setData] = useState({
        email: "",
        password: ""
    })


    function changeHandler(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function loginHandler(e) {
        e.preventDefault();
        console.log(data);
        axios.post(`http://localhost:8081/api/v1/auth/login`, data)
            .then((res) => {
                console.log(res.data);
                if (res.data === "User Not Found" || res.data === "Invalid credentials") {

                    dispatch(apiActions.updateLogin(res.data))
                    setTimeout(() => {
                        dispatch(apiActions.updateLogin(""))
                    }, 5000)
                }
                else {
                    dispatch(apiActions.addData(res.data))
                    Navigate("/dashboard")
                }


            })

    }

    function moveToSignupPage() {
        Navigate("/")
    }



    return (<div className='loginpage'>
        <div className="google-loginpage-con" >

            <div className="google-loginpage-right-con">
                <form className='google-loginpage-form' onSubmit={loginHandler}>
                    <input type="text" placeholder="Enter your email" name="email" onChange={changeHandler} required />
                    <input type="password" placeholder="Enter your password" name="password" onChange={changeHandler} required />
                    <button>Login</button>
                </form>
                <div className='google-loginpage-or'>(or)</div>
                <div id="google-signin-button"></div>
                <p>
                    <span className="login-already">No account? </span>
                    <span onClick={moveToSignupPage} className="signup-button">Sign up</span>
                </p>



            </div>
        </div>
        {notification &&
            <div className='google-login-notification'>
                <p>{notification}</p>
            </div>
        }

    </div>
    )
}

export default Login;