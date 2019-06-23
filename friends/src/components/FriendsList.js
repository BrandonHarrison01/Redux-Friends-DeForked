import React from 'react';
import { connect } from 'react-redux'

import { getFriends } from '../actions'
import Friend from './Friend'

class FriendsList extends React.Component {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        if (this.props.fetching) {
            return <h2>fetching...</h2>
        }
        if (this.props.error) {
            return(
                <h2>error</h2>
            )
        }
        console.log(this.props.friends)
        return (
            <div>
                {/* <h1>hi</h1> */}
                {this.props.friends.map(friend => {
                    return <Friend key={friend.id} friend={friend} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        friends: state.friends,
        fetching: state.fetchingFriends
    }
}

export default connect(
    mapStateToProps,
    {getFriends}
)(FriendsList)