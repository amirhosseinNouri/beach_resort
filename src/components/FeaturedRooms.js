import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room}></Room>;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms"></Title>
        <div className="featured-rooms-center">
          {loading ? <Loading></Loading> : rooms}
        </div>
      </section>
    );
  }
}
