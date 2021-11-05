import React from "react";
import Ticker from 'react-ticker';
//css
import './Display.css'

const Display = ({ display }) => {
    return (
        <div className='display-container'>
            <Ticker className='ticker-display' mode='smooth'>
                {({i}) => (
                    <div>
                        <h2 className ='ticker-words'>{'Covid is still a global issue. Please be considerate of others'} </h2>
                    </div>
                )}
            </Ticker>
            <div>
                <h3 className='display-words'>{display}</h3>
            </div>
        </div>
    )
};

export default Display; 