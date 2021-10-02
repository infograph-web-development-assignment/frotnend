import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiData from "./ApiData";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };
  }

  componentDidMount = async () => {
    const url = "https://digimon-api.vercel.app/api/digimon";
    const result = await axios.get(url);
    this.setState({
      apiData: result.data,
    });
  };

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
            />
          );
        })}
      </>
    );
  }
}
export default Main;
