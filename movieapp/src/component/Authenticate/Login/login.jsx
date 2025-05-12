import React  from 'react'
import { Link } from "react-router";
import CustomButton from "../../../reuseable/customButton";
import { useState } from 'react';
import style from './login.module.css'


const Login = () => {
const loginDetails = {
    email: "",
    password: ""
 };

 const [loginDta, setLoginData] = useState(loginDetails);

 const handleChange = (e)=>{
    const {name, value} = e.target;
    setLoginData((prev)=>({...prev, [name]: value.trim()}))
 }

 return (
    <div className={style.container}>
        <div>Login</div>
        <form>
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                placeholder="@email.com"
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label>Password</label>
                <input
                type="password"
                name="password"
                placeholder="enter your password"
                onChange={handleChange}
                required
                />
            </div>
                 <Link to="/signUp" className={style.button}>signUp</Link>
                <CustomButton/>
        </form>
    </div>
 )
}

export default Login