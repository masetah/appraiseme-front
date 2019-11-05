import React, {Component} from 'react';
import { Button } from 'reactstrap/lib';
import Register from './Register';
import Footer from '../Components/Footer';
import {Grid, Cell} from 'react-mdl';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '123',
            name: '', 
            user_id: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    handleLogin=async(e)=>{
        e.preventDefault();
        try{
            const login = await fetch('https://apppraiseme-api.herokuapp.com/sessions', {
                method: 'POST', 
                body: JSON.stringify(this.state),
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
            const parsedResponse = await login.json();
                        console.log(parsedResponse);
                        this.setState({
                            name:parsedResponse.user.name,
                            email:parsedResponse.user.email,
                            user_id: parsedResponse.user.id, 
                        }) 
                        console.log(this.state)    
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return(
            <div className="login-page">
                <Grid className="login">
                    <Cell col={12}>
                    <form className="form-signin" onSubmit={this.handleLogin}>
                    <img className="loginLogo" src="Logos/web-page.png" alt="icon" />
                    <h3 className="form-signin-heading">Log into AppPraise Me</h3>
                        <input className="form-control" type="text" placeholder="Email Address" name="email" autoComplete="off" onChange={this.handleChange}></input>
                        <input className="form-control" type="password" placeholder="Password" name="password" autoComplete="off" onChange={this.handleChange}></input>
                        <label className="checkbox">
                            <input
                            type="checkbox"
                            value="remember-me"
                            id="rememberMe"
                            name="rememberMe"
                            />{" "}
                            Remember me
                        </label>
                        <Button className="btn btn-lg btn-primary btn-block" id="loginButton" color="primary" href="/dashboard">
                            Login
                            {/* <Link id="loginLink" to={{pathname:`/dashboard`, 
                                state: this.state
                            }}>Login</Link>  */}
                        </Button>
                        <Button id="forgot-password" color="link" >Forgot Password?</Button>
                        <Register />
                        <p id="disclaimer">This application is a demo. Do not leave any sensitive information. Anyone can log in by clicking "login."</p>
                    </form>
                    </Cell>
                    <Footer/>
                </Grid>
            </div>
 
        )
    }
}

export default Login;