import React from 'react';
import style from './Login.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import RegistrationPhoto from '../../Assets/registrationPhoto.jpg';

import { TextBox, GoogleButton, BigButton } from '../../Components/ReusableComponents/ReusableComponents';

const Login = () => {
    return (
        <>
            <Header />
            <main className={style.login}>
                {/* Left Section */}
                <section className={style.leftSection}>
                    <img 
                        src={RegistrationPhoto}
                        alt="Promotional image for Local Leaks" 
                        className={style.leftImage} 
                    />
                    <h1 className={style.leftSectionShopSmart}>Shop Smart</h1>
                    <h2 className={style.leftSectionShopLocal}>Shop Local.</h2>
                    <h3 className={style.leftSectionLocalLeaks}>Local Leaks</h3>
                </section>

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

                        <BigButton buttonType='submit' buttonText='Login' />

                        <p className={style.createAccount}>
                            Don’t have an account? <a href="/signup">Create one</a>
                        </p>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Login;