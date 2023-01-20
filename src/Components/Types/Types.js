import React, { useEffect, useState } from 'react';
import AandQ from '../Aside/A&Q/AandQ';
import Aside from '../Aside/Aside';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import './Types.css';


const Types = () => {
    const [types, setTypes] = useState([]);
    const [games, setGames] = useState([]);
    // console.log(games)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTypes(data))
    }, []);



    const AddToCart = (sestem) => {
        const newGame = [...games, sestem];
        setGames(newGame);
    }

    return (
        <div className='container'>
            <div className='types'>
                <h1 className='typesInfo'>Types of Swimming: <br></br> Learn Various Swimming Strokes And Styles</h1>
                <div className='carts'>
                    {
                        types.map(type => <Cart
                            key={type.id}
                            cart={type}
                            AddToCart={AddToCart}
                        ></Cart>)
                    }

                </div>
            </div>
            <div className='aside'>
                <Aside game={games} key={games.id}></Aside>

            </div>
        </div>
    );
};

export default Types;