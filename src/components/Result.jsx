import React from 'react';

function Result(props){
    return (
        <div className="col-7">
            <p className="amount">${(Math.round(props.value * 100) / 100).toFixed(2)}</p>
        </div>
    );
}

export default Result;