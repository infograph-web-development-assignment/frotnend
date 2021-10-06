import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminRegister from "./AdminRegister";
import AdminLogin from "./AdminLogin";
import axios from "axios";
import AuthenticatedAdmin from "./AuthenticatedAdmin";

class Admin extends React.Component {
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
          allAdmins:[]
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
    
      // loggingIn = (event) => {
      //   event.preventDefault();
      //   if (
      //     this.state.registerPassword === this.state.loginPassword &&
      //     this.state.loginUsername === this.state.registerUsername
      //   ) {
      //     this.setState({
      //       showRegister: false,
      //       showLogin: false,
      //       isAuthenticated: true,
      //     });
      //   } else alert("Incorrect username and/or passowrd");
      // };




      SaveAdmin = async (data) => {
        this.setState({
          showRegister: false,
          showLogin: true,
        });
        const addAdmin = await axios.post(
          `${this.state.server}/saveAdmin`,
          data
        );
      };

      

      componentDidMount = async () =>{
        const getAdmins = await axios.get(`${this.state.server}/getSavedAdmins`);
        this.setState({
          allAdmins: getAdmins.data
        })
    
      }

      loggingIn = (event) => {
        event.preventDefault();
        let exist = 'n';
        this.state.allAdmins.map(element=>{
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
    








      
      // SaveProjectOwner = async (data) => {
      //   this.setState({
      //     showRegister: false,
      //     showLogin: true,
      //   });
      //   const addOwner = await axios.post(
      //     `${this.state.server}/savePojectOwner`,
      //     data
      //   );
      // };
    
      render() {
        return (
          <>
            <div>
              <div>
                {this.state.showRegister && (
                  <AdminRegister
                    registerPassword={this.state.registerPassword}
                    getName={this.getName}
                    getRegisterPassword={this.getRegisterPassword}
                    getEmail={this.getEmail}
                    getRegisterUsername={this.getRegisterUsername}
                    showLoginFunc={this.showLoginFunc}
                    SaveAdmin={this.SaveAdmin}
                    registerUsername={this.state.registerUsername}
                  />
                )}
              </div>
    
              <div>
                {this.state.showLogin && (
                  <AdminLogin
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
                <AuthenticatedAdmin />
              )}
            </div>
          </>
        );
      }
}

export default Admin
