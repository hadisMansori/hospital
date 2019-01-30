import React, { Component, } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Lable } from "react-bootstrap";
import "./login.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            signUpId: "",
            repeatPassword:""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form className="formlogin" onSubmit={this.handleSubmit}>
                    <FormGroup controlId="signUpId" bsSize="large">
                      <label  style={{float:"right"}}> نام کاربری</label>
                        <FormControl className='inputLogin '
                            autoFocus
                            type="text"
                            value={this.state.signUpId}
                            onChange={this.handleChange}
                            placeholder ='نام کاربری'
                        />
                    </FormGroup>
                    <FormGroup controlId="email" bsSize="large">
                    <label  style={{float:"right"}}> ایمیل</label>
                        <FormControl className='inputLogin '
                          
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder =' ایمیل'
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                    <label  style={{float:"right"}}> رمز </label>
                        <FormControl className='inputLogin'
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder =' رمز'
                        />
                    </FormGroup>
                    <FormGroup controlId="repeatPassword" bsSize="large">
                    <label  style={{float:"right"}}>تکرار رمز  </label>
                        <FormControl className='inputLogin'
                            value={this.state.repeatPassword}
                            onChange={this.handleChange}
                            type="password"
                            placeholder =' تکرار رمز'
                        />
                    </FormGroup>
                  
                    <Button className="submitformlogin"
                        block
                        bsSize="large"
                    >
                         <Link to="/login/">ثبت نام</Link>
                     </Button>
                </form>
            </div>
        );
    }
}
