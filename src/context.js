import React, { Component } from "react";

const RoomContext = React.createContext();
const Consumer = RoomContext.Consumer;

export default class RoomProvider extends Component {
  state = {
    name: "amir",
    last: "nouri",
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext, Consumer };
