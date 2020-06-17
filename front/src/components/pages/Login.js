import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        error: null,
        isLoaded: false,
        user: null,
        redirect: null
    };

    onChangeLogin = this.onChangeLogin.bind(this);
    onChangePassword = this.onChangePassword.bind(this);
    onSubmit = this.onSubmit.bind(this);

    onSubmit(event){
        if (this.state.login) {
            if (this.state.password) {
                fetch('http://localhost:8081/user/username?username=' + this.state.login + '&password=' + this.state.password)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({
                                isLoaded: true,
                                user: result
                            });

                            if (this.state.user.username === this.state.login) {
                                this.setState({ redirect: "/family-tree" });
                            } else {
                                alert('Wrong email or password');
                            }
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
            } else {
                alert('Please, enter password');
            }            
        } else {
            alert('You need to login');
        }

        event.preventDefault();
    }

    onChangePassword(event){
        this.setState({password: event.target.value});
    }

    onChangeLogin(event) {
        this.setState({login: event.target.value});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <React.Fragment>
                <div className="circle"></div>
                <div className="tria"></div>
                <form onSubmit={this.onSubmit}>
                <div className="login">
                    <div className="login-left text-center">
                        <img src="img/logo.png" alt="logo" />
                    </div>
                    <div className="login-right d-flex align-items-center">
                        <div className="w-100">
                            <h1>Family Tree</h1>
                            <div className="login-input mt-5">
                                <i className="fas fa-envelope"></i>
                                <input type="mail" value={this.state.login}
                                       onChange={this.onChangeLogin} placeholder="Email" />
                            </div>
                            <div className="login-input">
                                <i className="fas fa-lock"></i>
                                <input type="password" value={this.state.password}
                                       onChange={this.onChangePassword} placeholder="Password" />
                            </div>

                            <div className="mt-3 mb-4 d-flex justify-content-end">
                                <Link to="#">Forgot Password?</Link>
                            </div>

                            <button type="submit" className="proj-btn main-btn">Sign In</button>

                            <div className="mt-3 d-flex justify-content-center">
                                <Link to="/family-tree"><button className="proj-btn guest-btn">Sign In As Guest</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="circle-2"></div>
                    <div className="tria-2"></div>
                </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Login;