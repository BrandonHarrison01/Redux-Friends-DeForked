import React from 'react';
import { connect } from 'react-redux'

import { getFriends } from '../actions'
import Friend from './Friend'

class FriendsList extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        // if (this.props.fetching) {
        //     <h2>fetching...</h2>
        // }
        return (
            <div>
                <h1>hi</h1>
                {/* {this.props.friends.map(friend => {
                    <Friend key={friend.id} friend={friend} />
                })} */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        friends: state.friends,
        fetching: state.fetchingFriends
    }
}

export default connect(
    mapStateToProps,
    {getFriends}
)(FriendsList)