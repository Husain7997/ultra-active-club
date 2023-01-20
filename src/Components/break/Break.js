import React, { useContext, useState } from 'react';

const Break = (props) => {

    return (

        <div className='component-beackground'>
            <button onClick={() => props.BreakItem("10")}>10 </button>
            <button onClick={() => props.BreakItem("15")}>15 </button>
            <button onClick={() => props.BreakItem("20")}>20 </button>
            <button onClick={() => props.BreakItem("25")}>25 </button>
            <button onClick={() => props.BreakItem("30")}>30 </button>

        </div>

    );
};

export default Break;