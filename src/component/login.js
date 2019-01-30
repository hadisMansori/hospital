import React, { Component, } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./login.css";
import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
 class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = e => {
        if(e.target.id==="email")
        this.setState({email:e.target.value})
        if(e.target.id==="password")
        this.setState({password:e.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.email==="email@gmail.com" && this.state.password==="root")
    return(window.location="/admin")
    
        else{
            alert("ایمیل یا پسورد شما درست نمی باشد")
        }
  }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return (
            <div className="Login">
                <form className="formlogin" onSubmit={this.handleSubmit} autoComplete='off'>
                    <FormGroup controlId="email" bsSize="large" >
                    <label  style={{float:"right"}}> ایمیل</label>
                        <FormControl className='inputLogin '
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder =' email'
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                    <label  style={{float:"right"}}> رمز</label>
                        <FormControl className='inputLogin'
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder =' password'
                        />
                    </FormGroup>
                    <Button className="submitformlogin"
                        block
                        bsSize="large"
                        type="submit"
                    >
                        ورود
                     </Button>
                    <Button className="submitformlogin"
                        block
                        bsSize="large"
                    >
                           <Link to="/signup">ثبت نام</Link>
                     </Button>
                  
                </form>
            </div>
        );
    }
}

const mapstate = (state) => {
    return {
        signin: state.signin,
        post: state.post,
        user: state.user,
        doctor: state.doctor,
    }
  }
export default connect(mapstate)(Login)