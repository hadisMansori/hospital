
import React, { Component } from 'react';
import Submit from './submit'
import './home.css';
import Calendar from './calender';
import { connect } from 'react-redux';
import {Doctor} from "../app/actions/index";
const submit = () => <Submit />
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      value3: "تخصص",
      tr: [],
      number1: "",
      number2: "",
      id: "",
      defualt: "1",

    }
    this.id = React.createRef();
  }

  submitForm = () => {
    return (
      <Calendar />
    );
  }

  change1 = (e) => {
    if (e.target.value === "0")
      this.setState({ value1: "قلب", value2: "جراحی عروق", number1: "gh", number2: "jgh" }, () => this.setState({ id: this.id.current.value }));
    if (e.target.value === "1")
      this.setState({ value1: "نرولوژی", value2: "نفرولوژی", number1: "no", number2: "nf" }, () => this.setState({ id: this.id.current.value }));
    if (e.target.value === "2")
      this.setState({ value1: "روان", value2: "", number1: "ra" }, () => this.setState({ id: this.id.current.value }));
    // if(this.id.current.value!==null)

    //console.log(this.id.current.value);

  }
  change2 = (e) => {
    this.setState({ id: e.target.value });
  }
  select = (e) => {
    if (this.state.id === "gh")
      this.setState({ tr: this.props.post.ghalb.orogh });
    if (this.state.id === "jgh")
      this.setState({ tr: this.props.post.ghalb.jorogh });
    if (this.state.id === "no")
      this.setState({ tr: this.props.post.dakhale.noro });
    if (this.state.id === "nf")
      this.setState({ tr: this.props.post.dakhale.nfro });
    if (this.state.id === "ra")
      this.setState({ tr: this.props.post.asab.ravan });
  } 
  get=(event)=>{
    
    var doctor=this.state.tr.filter((e,i,a) => i==parseInt(event.target.id));
    doctor=doctor[0].name
    this.props.dispatch(Doctor(doctor));
    return(window.location="/submit")
  }
  render() {
    return (
      
      <div className="homeContainer" >
        <div className="homeHeader">
          <h1>نوبت دهی بیمارستان شهید رحیمی</h1>
        </div>
        <div className="homeContanat">
          <div className='homedrop'>
            <button className="homebtn" onClick={this.select}>نمایش پزشکان</button>
            <select className='homeSlct' onChange={this.change1}>
              <option>گروه تخصصی</option>
              <option value="0">قلب</option>
              <option value="1">داخلی</option>
              <option value="2">اعصاب</option>
            </select>
            <select className='homeSlct' onChange={this.change2} ref={this.id}>
              <option>تخصص</option>
              <option value={this.state.number1} >{this.state.value1}</option>
              <option value={this.state.number2}>{this.state.value2}</option>
            </select>
            <div className='homeCln'>
              <Calendar />
            </div>
          </div>
        </div>

        {/* end div contant */}

        <div className='homeTablePosition'>
          <table className="hometable">
            <tr >
              <th>نام پزشک</th>
              <th>ادرس مطب</th>
              <th>شماره تلفن</th>
              <th style={{ width: 100 }}>  وضعیت  </th>
            </tr>
            {
              this.state.tr.map((e, i) => {
                return (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.adress}</td>
                    <td>{e.number}</td>
                    <td><a id={i} onClick={this.get} >نوبت دهی</a></td>
                  </tr>
                )
              })
            }
          </table>
        </div>
        <div className="homeFooter">
          <p>hgkhj</p>
        </div>
      </div >
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
export default connect(mapstate)(Home);

