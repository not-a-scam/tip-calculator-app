import React from 'react';
import ResultHeading from './ResultHeading';
import Result from './Result';
import Button from './Button';

function ResultsCard(props){

    return (
    <div className="col-md-12 col-lg-6">
        <div className="result section">
            <div className="results-container">
                <div className="row">
                    <ResultHeading title="Tip Amount" subtitle="/ person"/>
                    <Result value={props.tip}/>
                    <ResultHeading title="Total" subtitle="/ person"/>
                    <Result value={props.total}/>
                </div>
                <div className="d-grid gap-2 btn-container">
                    <Button classes={["btn", "reset-btn"]} content="RESET" onClick={props.reset}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ResultsCard;
