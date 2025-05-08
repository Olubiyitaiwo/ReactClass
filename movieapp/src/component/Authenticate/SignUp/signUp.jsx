import React from "react";
import CustomButton from "../../../reuseable/customButton";
import { useState } from "react";
import { useSignUpMutation } from "../../../service/userAuthApi";

const SignUp =()=> {
    const userDetails = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const [userData, setUserData] = useState(userDetails);

    // const res = useSignUpMutation();
    // console.log(res);

    const [signUp, {isloading, isError}] = useSignUpMutation();

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setUserData((prev)=>({...prev, [name]: value.trim()}))
    };

    const submitHandler = async(e)=>{
        e.preventDefault();
        try{
            const response = await signUp(userData).unwrap();
            console.log(response)
        }catch (error) {
            console.log(error)

        }
    }

    console.log(userData)

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Sign up</h2>
                <div>
                    <label>First Name</label>
                    <input
                    name="firstName"
                    placeholder="first name"
                    onChange={handleInput}
                    required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                    name="last name"
                    placeholder="last name"
                    onChange={handleInput}
                    required
                    />
                    
                </div>

                <div>
                    <label>email</label>
                    <input
                    name="email"
                    placeholder="@mail.com"
                    onChange={handleInput}
                    required
                    />
                </div>

                <div>
                    <label>password</label>
                    <input
                    name="password"
                    placeholder=".abc"
                    onChange={handleInput}
                    required
                    />
                </div>
                <CustomButton text="signup"/>
            </form>
        </div>
    )
}
export default SignUp;