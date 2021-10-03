import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./RegisterForm";
import Login from "./Login";
import Authenticated from "./Authenticated";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_SERVER,
      name: "",
      registerUsername: "",
      email: "",
      registerPassword: "",
      showRegister: true,
      showLogin: false,
      loginUsername: "",
      loginPassword: "",
      isAuthenticated: false,
      savedData: "",
    };
  }

  // function to close register form and open login form
  showLoginFunc = () => {
    this.setState({
      showRegister: false,
      showLogin: true,
    });
  };

  // function to close login form and open register form
  showRegisterFunc = () => {
    this.setState({
      showRegister: true,
      showLogin: false,
    });
  };

  // to store the value of the user's name
  getName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  // To store the value of user's username of register form
  getRegisterUsername = (event) => {
    this.setState({ registerUsername: event.target.value });
    console.log(this.state.registerUsername);
  };

  // To store the value of user's email
  getEmail = (event) => {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  };

  // To store the value of user's register passowrd
  getRegisterPassword = (event) => {
    this.setState({ registerPassword: event.target.value });
    console.log(this.state.registerPassword);
  };

  // To store the value of user's username of login form
  getLoginUsername = (event) => {
    this.setState({ loginUsername: event.target.value });
    console.log(this.state.loginUsername);
  };

  // To store the value of user's passowrd of login form
  getLoginPassword = (event) => {
    this.setState({ loginPassword: event.target.value });
    console.log(this.state.loginPassword);
  };

  loggingIn = (event) => {
    event.preventDefault();
    if (
      this.state.registerPassword == this.state.loginPassword &&
      this.state.loginUsername == this.state.registerUsername
    ) {
      this.setState({
        showRegister: false,
        showLogin: false,
        isAuthenticated: true,
      });
    } else alert("Incorrect username and/or passowrd");
  };

  sendFund = async (data) => {
    const sendTheFund = await axios.post(
      `${this.state.server}/sendTheFund`,
      data
    );
  };

  SaveProjectOwner = async (data) => {
    this.setState({
      showRegister: false,
      showLogin: true,
    });
    const addOwner = await axios.post(
      `${this.state.server}/savePojectOwner`,
      data
    );
  };

  render() {
    return (
      <>
        <div>
          <div>
            {this.state.showRegister && (
              <RegisterForm
                registerPassword={this.state.registerPassword}
                getName={this.getName}
                getRegisterPassword={this.getRegisterPassword}
                getEmail={this.getEmail}
                getRegisterUsername={this.getRegisterUsername}
                showLoginFunc={this.showLoginFunc}
                SaveProjectOwner={this.SaveProjectOwner}
                registerUsername={this.state.registerUsername}
              />
            )}
          </div>

          <div>
            {this.state.showLogin && (
              <Login
                loginUsername={this.state.loginUsername}
                getLoginUsername={this.getLoginUsername}
                loginPassword={this.state.loginPassword}
                getLoginPassword={this.getLoginPassword}
                showRegisterFunc={this.showRegisterFunc}
                loggingIn={this.loggingIn}
              />
            )}
          </div>
          {this.state.isAuthenticated && (
            <Authenticated sendFund={this.sendFund} />
          )}
        </div>
      </>
    );
  }
}
export default Register;
