import React, { Component } from "react";
import axios from "axios";

class AllBeers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    console.log("DID MOUNT");
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response);
        this.setState({
          beers: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <div></div>;
  }
}

export default AllBeers;
