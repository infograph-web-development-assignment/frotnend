import React, { Component } from "react";
import axios from "axios";
import FavoriteCards from "./FavoriteCards";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_SERVER,
      favoritedData: [],

    };
  }

  // To render all saved data from database as soon as the page opens
  componentDidMount = async () => {
    const getFavorited = await axios.get(
      `${this.state.server}/getFavoritedData`
    );
    this.setState({
      favoritedData: getFavorited.data,
    });
    // console.log(this.state.favoritedData)
  };


  render() {
    return (
      <>
        {this.state.favoritedData.map((element) => {
          return <FavoriteCards allData={element} keys={element._id} />;
        })}
      </>
    );
  }
}

export default Favorite;
