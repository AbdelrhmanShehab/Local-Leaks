import React from 'react';
import style from './Login.module.css';

import { useNavigate } from "react-router-dom";

import { TextBox, GoogleButton, BigButton, AuthenticationBanner } from '../../Components/ReusableComponents/ReusableComponents';

const Login = () => {


    const navigate = useNavigate();

    const loginBtn = () => {
        navigate("/");
    };
    
    return (
        <>
            <main className={style.login}>
                {/* Left Section */}
                <AuthenticationBanner />

                {/* Right Section */}
                <section className={style.rightSection}>
                    <form className={style.loginForm}>
                        <h2 className={style.loginFormHeader}>Login</h2>
                        <p className={style.loginFormDescription}>Enter your credentials to create your account.</p>
                        
                        <GoogleButton />

                        <p  className={style.separator}>
                            <span>or</span>
                        </p>

                        <TextBox
                            label="Email Address"
                            inputType="email"
                            inputPlaceholder="Email Address" 
                        />
                        <TextBox
                            label="Password"
                            inputType="password"
                            inputPlaceholder="Password" 
                            forgetPassword="yes"
                        />

                        <div className={style.options}>
                            <label>
                                <input type="checkbox" />
                                <span> Keep me signed in</span>
                            </label>
                        </div>

                        <BigButton buttonType='submit' buttonText='Login' onClick={loginBtn}/>

                        <p className={style.createAccount}>
                            Don’t have an account? <a href="/signup">Create one</a>
                        </p>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Login;