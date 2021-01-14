import React , { useContext } from 'react';
import { ResultContext } from '../../containers/Context/ResultsContext/ResultsContext';
import Result from './Result/Result';
import './Results.modules.css';

const Results = () =>{
    
    const resContext = useContext(ResultContext);

    const updatedResults = resContext.results.map((res,index) => {
        return (
            <Result clicked={() => resContext.removeResult(index)} 
                    value={res} 
                    index={index}
                    key={index}  />
    )});

    return (<ul className="results_list">{updatedResults}</ul>);
}

export default Results;