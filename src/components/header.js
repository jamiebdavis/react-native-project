// import libraries
import React from "react";
import { Text, View } from "react-native";

//Make a components.
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

//Make a components available to other parts of the app.
export default Header;
