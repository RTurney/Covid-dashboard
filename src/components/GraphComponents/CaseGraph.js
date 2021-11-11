import React from 'react';
import { AutoSizer } from 'react-virtualized';
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
      <div className="graph-container">
                <XYPlot 
                className='graph' 
                height={270}
                width={400}
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