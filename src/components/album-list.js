import React, { Component } from "React";
import { View, Text } from "react-native";
import axios from "axios";
class AlbumList extends Component {
  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => console.log(res))
      .catch(err => console.log("code not found"));
  }

  render() {
    return (
      <View>
        <Text>'Album List!!!'</Text>
      </View>
    );
  }
}

export default AlbumList;
