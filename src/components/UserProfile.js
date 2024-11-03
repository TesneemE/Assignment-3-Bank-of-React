/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../components/UserProfile.css';

class UserProfile extends Component {
  render() {
    return (
      <div className = "user-box">
      <div className="user-form">
      <div className="profile-icon"></div>
        <h1>User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>
        <br/>
        <Link to="/" className="home-button">Return to Home</Link>
      </div>
      </div>
    );
  }
}

export default UserProfile;