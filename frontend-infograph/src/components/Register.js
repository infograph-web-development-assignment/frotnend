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
      allProjectOwners:[]
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
  };

  // To store the value of user's username of register form
  getRegisterUsername = (event) => {
    this.setState({ registerUsername: event.target.value });
  };

  // To store the value of user's email
  getEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  // To store the value of user's register passowrd
  getRegisterPassword = (event) => {
    this.setState({ registerPassword: event.target.value });
  };

  // To store the value of user's username of login form
  getLoginUsername = (event) => {
    this.setState({ loginUsername: event.target.value });
  };

  // To store the value of user's passowrd of login form
  getLoginPassword = (event) => {
    this.setState({ loginPassword: event.target.value });
  };












  componentDidMount = async () =>{
    const getProjectOwners = await axios.get(`${this.state.server}/getSavedProjectOwners`);
    this.setState({
      allProjectOwners: getProjectOwners.data
    })

  }

  loggingIn222 = (event) => {
    event.preventDefault();
    let exist = 'n';
    this.state.allProjectOwners.map(element=>{
      if ((this.state.loginPassword === element.password && this.state.loginUsername === element.username) && (this.state.loginUsername!='' && this.state.loginPassword != ''))
      {
        exist = 'y'
        
      }
    })
    if (exist==='y') {
      this.setState({
        showRegister: false,
        showLogin: false,
        isAuthenticated: true,
      });

    }
    else{
      alert('Incorrect username and/or passowrd ')
    }
  }



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
        <div style={{backgroundImage:'url(https://i1.wp.com/www.alphr.com/wp-content/uploads/2017/10/what_is_seed_funding-scaled.jpg?zoom=2&resize=738%2C320&ssl=1)',height:'150px', width:'1000px'}}>
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
                loggingIn={this.loggingIn222}
              />
            )}
          </div>
          {this.state.isAuthenticated && (
            <Authenticated />
          )}
        </div>
      </>
    );
  }
}
export default Register;
