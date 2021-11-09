import React from 'react';
import {XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import 'react-vis/dist/style.css';

const DeathGraph = ( { deathsData } ) => {

    let data = [];

    for (const [key, value] of Object.entries(deathsData)) {
        data.push(
            {x:`${new Date(key).getTime()}`, y:`${value}`}
        )
    }

    return (
      <div className="graph">
        <XYPlot className='case-graph' height={300} width={500} margin={{ left: 80 }} >
            <XAxis
                title='dates'
                attr="x"
                attrAxis="y"
                orientation="bottom"
                tickFormat={function tickFormat(d){return new Date(d).toLocaleDateString()}}
                tickTotal={3}
                tickSize={1}
            />
            <YAxis
                title='Total deaths'
                attr="y"
                attrAxis="x"
                orientation="left"
                tickTotal={2}
                // tickFormat={function tickFormat(d){return (d/1000) + "K"}}
                tickSize={1}
            />
            <LineSeries
                data={data}         
                opacity={1}
                strokeStyle="solid"
                stroke='purple'
                style={{ fill: 'none' }}
            />
            
        </XYPlot>
      </div>
    );
};

export default DeathGraph;