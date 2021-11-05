import React from "react";
import Ticker from 'react-ticker';
//css
import './Display.css'

const Display = ({ display }) => {
    return (
        <div className='display-container'>
            <Ticker className='ticker-display' mode='smooth'>
                {({}) => (
                    <div>
                        <h2 className ='displayed-words'>{display}</h2>
                    </div>
                )}
            </Ticker>
        </div>
    )
};

export default Display; 