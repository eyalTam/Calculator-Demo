import React from 'react';
import './Button.modules.css';



const Button = props => {
    
    let stylingElement = "btn_style ";

    if(props.extraStyling){
        stylingElement = stylingElement.concat(props.extraStyling);
    }
    return <button className={stylingElement} onClick={props.clicked} >{props.description}</button>;
}

export default Button;