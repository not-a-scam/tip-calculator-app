import React, { useState } from "react";

function TextInput(props){
    const [classes, setClasses] = useState({});
    const [visibility, setVisibility] = useState({visibility: "hidden"});

    function checkInput(value) {
        if(value){
            setClasses({});
            setVisibility({visibility: "hidden"});
        } else {
            setClasses({boxShadow: "0 0 0 2pt hsl(27, 64%, 52%)"});
            setVisibility({visibility: "visible"});
        }
    }

    return <div>
        <div className="row">
            <div className="col-6">
                <h2 className={props.isTop ? "top-h2": ""}>{props.title}</h2>
            </div>
            <div className="col-6">
                <h2 className={props.isTop ? "warning top-h2": "warning"} style={visibility}>Can't be zero</h2>
            </div>
        </div>
        <div className="text-input">
            <img src={props.icon} alt=""/>
            <input 
                type="number" 
                onChange={(event) => {
                    const newValue = event.target.value;
                    props.onChange(newValue)
                    checkInput(newValue);
                }} 
                value={props.value}
                style={classes}    
            />
        </div>
    </div>
}

export default TextInput