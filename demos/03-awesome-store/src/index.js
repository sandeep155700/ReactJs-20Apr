import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

class Counter extends React.Component {
    constructor( props ) {
        super( props );

        store.subscribe( this.forceUpdate.bind( this ) );
    }

    increment() {
        store.dispatch( incrementAC() );
    }
    
    decrement() {
        store.dispatch( decrementAC() );
    }

    render() {
        return (
            <div>
                {store.getState().counter}
                <input type="number" />
                <button onClick={this.increment.bind(this)}>+</button>
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }
}

// action constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creators
const incrementAC = () => {
    return {
        type: INCREMENT,
        payload: {
            
        }
    };
}

const decrementAC = () => {
    return {
        type: DECREMENT
    };
}

// Rules: Reducers are "pure functions"
// 1. should not modify incoming inputs
// 2. it should alwys return the same output for the same inputs (cannot make Ajax calls)
// 3. It should not use any global variables and function
const counterReducer = ( curState, action ) => {
    let newState;

    switch( action.type ) {
        case INCREMENT:
            newState = {
                counter: curState.counter + 1
            };
            break;
        case DECREMENT:
            newState = {
                counter: curState.counter - 1
            };
            break;
        default:
            newState = curState;
    }

    return newState;
}

const store = createStore(
    counterReducer,
    {
        counter: 0
    },
    composeWithDevTools()
);

ReactDOM.render( <Counter counter={10} />, document.getElementById( 'root' ) );