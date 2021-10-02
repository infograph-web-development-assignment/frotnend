import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiData from "./ApiData";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      server:process.env.REACT_APP_SERVER
    };
  }

  componentDidMount = async () => {
    const url = "https://digimon-api.vercel.app/api/digimon";
    const result = await axios.get(url);
    this.setState({
      apiData: result.data,
    });
  };

  addToFav = async (data)=>{
    const adder = await axios.post(`${this.state.server}/addToFav`,data);
    console.log("wowjejrksejsjerj");
  }

  render() {
    return (
      <>
        {this.state.apiData.map((element, idx) => {
          return (
            <ApiData
              idx={idx}
              name={element.name}
              img={element.img}
              level={element.level}
              addToFav = {this.addToFav}
            />
          );
        })}
      </>
    );
  }
}
export default Main;
