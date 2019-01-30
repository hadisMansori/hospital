import "./admin.css";
import React, { Component } from 'react';
import { connect } from 'react-redux';
class Admin extends Component {

    w3_open() {
        document.getElementById("rightMenu").style.display = "block";
    }
    w3_close() {
        document.getElementById("rightMenu").style.display = "none";
    }
    render() {
        return (
            <div>
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
export default connect(mapstate)(Admin);

