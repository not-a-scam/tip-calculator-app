import React from "react";

function Button(props){
    const classes = props.classes.join(" ");

    return <button 
        className={classes} 
        onClick={() => {
            props.onClick(props.id, parseInt(props.id))
        }}
        value={props.id}
        >{props.content}</button>;
}

export default Button;