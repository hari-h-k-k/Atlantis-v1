import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../actions/userActions';

function User() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSetUser = () => {
        dispatch(setUser('John Doe'));
    };

    const handleClearUser = () => {
        dispatch(clearUser());
    };

    return (
        <div>
            <h2>User</h2>
            <p>Name: {user ? user : 'No user'}</p>
            <button onClick={handleSetUser}>Set User</button>
            <button onClick={handleClearUser}>Clear User</button>
        </div>
    );
}

export default User;
