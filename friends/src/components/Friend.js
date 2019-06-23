import React from 'react'

function Friend (props) {
    return(
        <div>
            <h2>name: {props.friend.name} age: {props.friend.age}</h2>
            <h3>email: {props.friend.email}</h3>
        </div>
    )
}

export default Friend;