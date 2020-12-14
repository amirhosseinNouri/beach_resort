import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
const Consumer = RoomContext.Consumer;

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  // getData

  componentDidMount() {
    // this.getData()
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, id, images };
      return room;
    });

    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext, Consumer };
