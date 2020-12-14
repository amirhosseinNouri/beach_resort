import React, { Component } from 'react'
import { RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
console.log(this.context.featuredRooms);
        return ( 
            <div>
                hello from featured rooms

                <Loading></Loading>
                <Room></Room>

            </div>
        )
    }
}
