import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counterActions';

function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    };

    const handleDecrement = () => {
        dispatch(decrementCounter());
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;
