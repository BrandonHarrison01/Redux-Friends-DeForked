import React from 'react';

class AddFriendForm extends React.Component {
    state = {
        name = '',
        age = '',
        email = ''
    }

    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    addFriend = e => {
        e.preventDefault();
    }

    render () {
        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <input 
                        placeholder='Name'
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.changeHandler}
                    />
                    <input 
                        placeholder='Age'
                        type='text'
                        name='age'
                        value={this.state.age}
                        onChange={this.changeHandler}
                    />
                    <input 
                        placeholder='Email'
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.changeHandler}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriendForm