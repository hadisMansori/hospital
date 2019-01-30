import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import { Doctor, Deltype } from "../app/actions/index";
class DeleteD extends Component {
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
            flag:true

        }
        this.id = React.createRef();
    }
    w3_open() {
        document.getElementById("rightMenu").style.display = "block";
    }
    w3_close() {
        document.getElementById("rightMenu").style.display = "none";
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
    docchange = (e) => {
        if (e.target.name === "ndoc")
            this.setState({ doc: { ...this.state.doc, name: e.target.value } });
        if (e.target.name === "adoc")
            this.setState({ doc: { ...this.state.doc, adress: e.target.value } });
        if (e.target.name === "numdoc")
            this.setState({ doc: { ...this.state.doc, number: e.target.value } });;
    }
    get = (event) => {

        const doctor = this.state.tr.filter((e, i, a) => i == parseInt(event.target.id));
        this.props.dispatch(Doctor(doctor[0].name));

        return (window.location = "/submit")
    }
    delet = (e) => {
        this.props.dispatch(Deltype(this.state.id,e.target.id));
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
    render() {
        console.log(this.props.post);
        return (

            <div className="mainaddoc">
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{ display: "none", right: 0 }} id="rightMenu">
                    <button onClick={this.w3_close} className="w3-bar-item w3-button w3-large">Close &times;</button>
                    <a href="/sick" className="w3-bar-item w3-button">اطلاعات بیماران</a>
                    <a href="/addD" className="w3-bar-item w3-button">افزودن پزشک</a>
                    <a href="/deletD" className="w3-bar-item w3-button">حذف پزشک</a>
                </div>
                <div id="main">
                    <div className="w3-teal1">
                        <div className="w3-container">
                            <h1 >پنل مدیریت</h1>
                        </div>
                        <button className="w3-button w3-teal w3-xlarge w3-right" onClick={this.w3_open}>&#9776;</button>
                    </div>
                </div>
                <div className="Maincontainer">

                    <div className='homedrop'>
                        <button className="homebtn" onClick={this.select}> تایید حذف</button>
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
                    </div>
                </div>
                <div className='homeTablePosition'>
                    <table className="hometable">
                        <tr >
                            <th>شماره تلفن</th>
                            <th>ادرس مطب</th>
                            <th>نام پزشک</th>
                            <th style={{ width: 100 }}>  حذف  </th>
                        </tr>
                        {
                            this.state.tr.map((e, i) => {
                                return (
                                    <tr>
                                        <td>{e.number}</td>
                                        <td>{e.adress}</td>
                                        <td>{e.name}</td>
                                        <td><a id={i} onClick={this.delet} >حذف</a></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
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
export default connect(mapstate)(DeleteD);



