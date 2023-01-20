import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Aside.css';
import image from '../../images/husain.jpg';
import Break from '../break/Break';




const Aside = (props) => {
    const [Breaks, setBreak] = useState([0]);
    const { game } = props;
    console.log(game);

    let total = 0;
    for (const item of game) {
        total = total + item.time;
    }
    const BreakItem = (item) => {
        setBreak(item)
        localStorage.setItem('item', JSON.stringify(item));
    }
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('item'));
        if (item) {
            setBreak(item);
        }
    }, []);

    return (
        <div className='aside-container'>
            <div className='profile'>
                <img src={image} alt="" />
                <h1>Husain Ahmed</h1>
            </div>
            <h2>Add A Break</h2>
            <Break BreakItem={BreakItem} ></Break>
            <h2>Swimming Details</h2>
            <div className='component-beackground'>
                <h5>Swimming Time : </h5>
                <p><span>{total}</span> Seconds</p>
            </div>
            <div className='component-beackground'>
                <h5>Break Time : </h5>
                <p><span>{Breaks}</span> Seconds</p>
            </div>
            <div className='component-beackground'>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Aside;