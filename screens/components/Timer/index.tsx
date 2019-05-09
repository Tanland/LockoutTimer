import React from "react"
import { View } from "react-native";
import Timer from "./Timer";


class Index extends React.Component {
  public render() {
    return (
      <View>
        <Timer time={1000 * 60 * 5}/>
      </View>
    )
  }
}

export default Index