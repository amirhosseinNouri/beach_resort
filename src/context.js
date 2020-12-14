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

  getRoom = (slug) =>{
    let tempRooms = [...this.state.rooms]
    return tempRooms.find((room) => room.slug === slug)

  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom : this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }

}

export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){
   return <Consumer>
      {value => <Component {...props} context={value}></Component>}
    </Consumer>
  }
}

export { RoomProvider, RoomContext, Consumer };
