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
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // getData

  componentDidMount() {
    // this.getData()
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
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

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    return tempRooms.find((room) => room.slug === slug);
  };

  handleChange = (event) => {
    const target = event.target.target;
    const value =
      event.type === "checkbox" ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    // all the rooms
    let tempRooms = [...rooms];
    // transform valuess
    capacity = parseInt(capacity)

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by Capacity
    if(capacity !== 1){
      tempRooms = tempRooms.filter((item) => item.capacity >= capacity)
    }

    

    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <Consumer>
        {(value) => <Component {...props} context={value}></Component>}
      </Consumer>
    );
  };
}

export { RoomProvider, RoomContext, Consumer };
