
import React, { Component } from 'react';
import "./submit.css";
import { connect } from 'react-redux';
import {signin} from "../app/actions/index";
class Submit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      doctor:"",
      fname: "",
      lname: "",
      number: "",
      subject: "",
     
    }
  }
  change = (e) => {
    e.preventDefault();
    if (e.target.id === "fname")
      this.setState({ fname: e.target.value })
    if (e.target.id === "lname")
      this.setState({ lname: e.target.value })
    if (e.target.id === "number")
      this.setState({ number: e.target.value })
    if (e.target.id === "subject")
      this.setState({ subject: e.target.value })
  }
  sign=(e)=> {
    e.preventDefault();
    if ((this.state.fname || this.state.lname || this.state.number) !== "") {
      this.setState({doctor:this.props.doctor},()=>this.props.dispatch(signin(this.state)));
       alert("ثبت نام با موفقیت انجام شد" );
      }
    else {
      alert("فیلد ها را به طور کامل پر کنید" )
    }
  }
  render() {
    console.log(this.props.doctor);
    return (
      <div className="routeContactUus">
        <div className="container">
          <form autocomplete="off">
            <div className="row">
              <div className="col-25">
                <label for="fname">نام </label>
              </div>
              <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="نام" onChange={this.change} />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="lname">نام خانوادگی</label>
              </div>
              <div className="col-75">
                <input type="text" id="lname" name="lastname" placeholder="نام خانوادگی " onChange={this.change} />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="lname">شماره تلفن</label>
              </div>
              <div className="col-75">
                <input type="text" id="number" name="number" placeholder="شماره تلفن " onChange={this.change} />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label for="subject">توضیحات </label>
              </div>
              <div className="col-75">
                <textarea id="subject" name="subject" placeholder="شرح توضیحات"
                  className="textareaSub" onChange={this.change} ></textarea>
              </div>
            </div>
            <div>
              <input className='submitBtn' type="submit" value="تایید" onClick={this.sign} />
            </div>
          </form>
        </div>
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
export default connect(mapstate)(Submit);

