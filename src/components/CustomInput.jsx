import React from "react";

function CustomInput(props){
    const classes = props.classes.join(" ");

    return (
    <input 
        type="Number" 
        className={classes} 
        placeholder={props.content} 
        onClick={() => {
            props.onClick(props.id, parseInt(props.value))
        }}
        onChange={(event) => {
            const value = event.target.value;
            props.onChange(value)
        }}
        value={props.value}
    />);
}

export default CustomInput;