import {
    FRIENDS_FETCH,
    FRIENDS_SUCCESS,
    FRIENDS_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    ADD_FRIEND
} from '../actions';

const initialState = {
    // deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    // savingFriends: false,
    // updatingFriend: false,
    error: null
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true,
            }    
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggingIn: false,
            }
        case FRIENDS_FETCH:
            return {
                ...state,
                fetchingFriends: true,
            };
        case FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        case FRIENDS_FAIL:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        case ADD_FRIEND:
            return {
                ...state,
                friends: action.payload
            }
        default:
            return state;
    }
}

export default reducer