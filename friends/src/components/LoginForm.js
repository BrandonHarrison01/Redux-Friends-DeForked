import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class LoginForm extends React.Component {
    state = {
        creds: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        console.log(this.state.creds)
        this.props.login(this.state.creds).then(res => {
            if (res) {
                this.props.history.push('/friends')
            }
        })

        this.setState({ 
            creds: {
                username: '',
                password: ''
            }
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                        placeholder='username'
                        type='text'
                        name='username'
                        value={this.state.creds.username}
                        onChange={this.changeHandler}
                    />
                    <input 
                        placeholder='password'
                        type='password'
                        name='password'
                        value={this.state.creds.password}
                        onChange={this.changeHandler}
                    />
                    <button>Submit</button>
                    {this.props.loggingIn ? (
                        <h3>logging in...</h3>
                    ):('')}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn
})

export default connect(mapStateToProps,
    { login }
)(LoginForm)