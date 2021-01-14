import React from 'react';

const Result = props => {
    return (
    <li className="result_style">
        <h2 onClick={props.clicked}>{props.value}</h2>
    </li>
)}

export default Result;