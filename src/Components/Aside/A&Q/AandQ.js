import React from 'react';
import { Accordion } from 'react-bootstrap';
import './AandQ.css'

function AandQ() {
    return (
        <div className='AandQ'>
            <div className='AandQ-Item'>
                <h2>how does react work?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes</p>
            </div>
            <div className='AandQ-Item'>
                <h2>What difference in the props and state?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div className='AandQ-Item'>
                <h2>what is the purpose of useeffect hook?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.</p>
            </div>
        </div>
    );
}

export default AandQ;