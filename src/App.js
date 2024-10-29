/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import other components
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";

class App extends Component {
  constructor() {
    // Create and initialize state
    super();
    this.state = {
      accountBalance: 1234567.89,
      creditSum: 0,
      debitSum: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: "Joe Smith",
        memberSince: "11/22/99",
      },
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  componentDidMount() {
    // Fetches the data and updates the constructor variables
    fetch("https://johnnylaicode.github.io/api/credits.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          creditSum: data.reduce(
            (accumulator, val) => accumulator + Number(val.amount),
            0
          ),
          creditList: data,
        });
        this.updateBalance();
      })
      .catch((error) => console.error("Error fetching data:", error));
      fetch("https://johnnylaicode.github.io/api/debits.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
         debitSum: data.reduce(
            (accumulator, val) => accumulator + Number(val.amount),
            0
          ),
          debitList: data,
        });
        this.updateBalance();
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  // updates the overall account balanace by ubstracting debitsum from creditsum
  updateBalance = () => {
    this.setState({
      accountBalance: this.state.creditSum - this.state.debitSum,
    });
  };

  // adds a new item to the credit list while updating creditsum 
  addCredit = (newItem) => {
    this.setState((prev) => {
      return {
        creditList: [...prev.creditList, newItem],
        creditSum: prev.creditSum + Number(newItem.amount),
        accountBalance: prev.creditSum + Number(newItem.amount) - prev.debitSum,
      };
    });
  };

  addDebit = (newItem) => {
    this.setState((prev) => {
      return {
        debitList: [...prev.debitList, newItem],
        debitSum: prev.debitSum + Number(newItem.amount),
        accountBalance: prev.creditSum + Number(newItem.amount) - prev.debitSum,
      };
    });
  };
  // Create Routes and React elements to be rendered using React components
  render() {
    // Create React elements and pass input props to components
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    const CreditsComponent = () => (
      <Credits
        credits={this.state.creditList}
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );
    const DebitsComponent = () => (
      <Debits
        debits={this.state.debitList}
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    );

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/Assignment-3-Bank-of-React">
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
