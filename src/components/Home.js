/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import "../components/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-page-container">
        <img src="https://picsum.photos/200/200" alt="bank" />
        <h1>Bank of React</h1>

        <Link to="/userProfile" className="link">User Profile</Link>
        <br />
        <Link to="/login" className="link">Login</Link>
        <br />
        <Link to="/credits" className="link">Credits</Link>
        <br />
        <Link to="/debits" className="link">Debits</Link>
        
        <div className="account-balance-container">
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

export default Home;