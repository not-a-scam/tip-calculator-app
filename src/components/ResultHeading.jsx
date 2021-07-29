import React from 'react';

function ResultHeading(props){
    return (
        <div className="col-5 result-headings">
            <p className="result-title">{props.title}</p>
            <p className="result-subtitle">{props.subtitle}</p>
        </div>
    );
}

export default ResultHeading;
