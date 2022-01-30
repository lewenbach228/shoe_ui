import { ScrollView } from "react-native";
import React, { Component } from "react";

import axios from "axios";
import ShoeDetail from "./ShoeDetail";

export default class ShoesList extends Component {
  state = { shoes: [] };

  componentWillMount() {
    axios
      .get("https://www.devgenesis.org/data_shoes/shoes.json")
      .then((response) => this.setState({ shoes: response.data }));
  }

  renderShoes() {
    return this.state.shoes.map(shoe => (
      <ShoeDetail shoe = {shoe} key={shoe.title}/>
    ));
  }
  
  render() {
    return <ScrollView>{this.renderShoes()}</ScrollView>;
  }
}

// const styles = StyleSheet.create({});
