import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
     	<React.Fragment>
     		<div className="circle"></div>
            <div className="tria"></div>

              <div className="login">
                <div className="login-left text-center">
                  <img src="img/logo.png" alt="logo" />
                </div>
                <div className="login-right d-flex align-items-center">
                  <div className="w-100">
                    <h1>Family Tree</h1>
                    <div className="login-input mt-5">
                      <i className="fas fa-envelope"></i>
                      <input type="mail" placeholder="Email" />
                    </div>
                    <div className="login-input">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    
                    <div className="mt-3 mb-4 d-flex justify-content-end">
                    <Link to="#">Forgot Password?</Link>
                  </div>

                    <Link to="#"><button className="proj-btn main-btn">Sign In</button></Link>

                    <div className="mt-3 d-flex justify-content-center">
                    <Link to="/family-tree"><button className="proj-btn guest-btn">Sign In As Guest</button></Link>
                  </div>
                </div>
                </div>

                <div className="circle-2"></div>
                <div className="tria-2"></div>
            </div>
     	</React.Fragment>
    )
}

export default Login;