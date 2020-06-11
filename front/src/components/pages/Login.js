import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../layout/Header';
import SideBar from '../layout/SideBar';

function Login() {
    return (
     	<React.Fragment>
     		<div class="circle"></div>
            <div class="tria"></div>

              <div class="login">
                <div class="login-left text-center">
                  <img src="img/logo.png" />
                </div>
                <div class="login-right d-flex align-items-center">
                  <div class="w-100">
                    <h1>Family Tree</h1>
                    <div class="login-input mt-5">
                      <i class="fas fa-envelope"></i>
                      <input type="mail" placeholder="Email" />
                    </div>
                    <div class="login-input">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    
                    <div class="mt-3 mb-4 d-flex justify-content-end">
                    <a href="#">Forgot Password?</a>
                  </div>

                    <a href="#"><button class="proj-btn main-btn">Sign In</button></a>

                    <div class="mt-3 d-flex justify-content-center">
                    <Link to="/family-tree"><button class="proj-btn guest-btn">Sign In As Guest</button></Link>
                  </div>
                </div>
                </div>

                <div class="circle-2"></div>
                <div class="tria-2"></div>
            </div>
     	</React.Fragment>
    )
}

export default Login;