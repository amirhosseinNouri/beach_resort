import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      rooms container
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomsList rooms={sortedRooms}></RoomsList>
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { Consumer } from "../context";
// import Loading from "./Loading";
// export default function RoomsContainer() {
//   return (
//     <>
//       <Consumer>
//         {(value) => {
//           const { loading, sortedRooms, rooms } = value;
//           if (loading) {
//             return <Loading></Loading>;
//           }
//           return (
//             <div>
//               rooms container
//               <RoomsFilter rooms={rooms}></RoomsFilter>
//               <RoomsList rooms={sortedRooms}></RoomsList>
//             </div>
//           );
//         }}
//       </Consumer>
//     </>
//   );
// }
