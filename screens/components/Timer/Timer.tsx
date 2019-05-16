import * as React from "react";
import { Text, View } from "react-native";

interface TimerProps {
  time?: number;
}

class Timer extends React.Component<TimerProps> {

  public formatTime = (milliseconds: number) => {
    const remainingSec = Math.round(milliseconds / 1000);
    const seconds = parseInt((remainingSec % 60).toString(), 10);
    const minutes = parseInt(
      ((remainingSec / 60) % 60).toString(),
      10
    );
    const hours = parseInt((remainingSec / 3600).toString(), 10);
    const s = seconds < 10 ? "0" + seconds : seconds;
    const m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;
    h = h === "00" ? "" : h + ":";
    return h + m + ":" + s;
  }



  public render() {
    return (
      <View
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          // height: "1vh",
          flexDirection: "column"
        }}
      >
        <View>
          {/* <TimerCountdown
            initialMilliseconds={1000 * 60 * 5}
            onTick={milliseconds => console.log("tick", milliseconds)}
            onExpire={() => console.log("complete")}
            formatMilliseconds={
            }}
            allowFontScaling={true}
            style={{ fontSize: 20, color: "white" }}
          /> */}
          <Text style={{ fontSize: 40, color: "white", textAlign: "center" }}>
           {this.formatTime(this.props.time ? this.props.time : 5 * 60 * 1000)}
          </Text>
        </View>
      </View>
    );
  }
}

export default Timer;
