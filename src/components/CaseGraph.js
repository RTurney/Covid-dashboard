import React from 'react';
import {XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import 'react-vis/dist/style.css';

const CaseGraph = ( { casesData } ) => {

    let data = [];

    for (const [key, value] of Object.entries(casesData)) {
        data.push(
            {x:`${new Date(key).getTime()}`, y:`${value}`}
        )
    }

    return (
      <div className="cases-graph-container">
        <XYPlot 
        className='case-graph' 
        height={250} 
        width={500} 
        margin={{ left: 80 }} 
        xType="time"
        >
            <XAxis
                title='dates'
                attr="x"
                attrAxis="y"
                orientation="bottom"
                tickFormat={function tickFormat(d){return new Date(d).toLocaleDateString()}}
                tickTotal={2}
                tickSize={1}
            />
            <YAxis
                title='Total cases'
                attr="y"
                attrAxis="x"
                orientation="left"
                tickTotal={2}
                tickSize={1}
            />
            <LineSeries
                data={data}         
                opacity={1}
                strokeStyle="solid"
                stroke='red'
                style={{ fill: 'none' }}
            />
        </XYPlot>
      </div>
    );
};

export default CaseGraph;