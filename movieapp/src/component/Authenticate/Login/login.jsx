import React, { useState } from "react"

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

        </form>
    </div>
 )
}