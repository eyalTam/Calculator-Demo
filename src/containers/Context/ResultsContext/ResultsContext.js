import React , { useReducer , useContext } from 'react';
import { CalculatorContext } from '../CalculatorContext/CalculatorContext';

import {
    ADD_RESULT,
    REMOVE_RESULT
} from '../../../components/actions/actionTypes';

export const ResultContext = React.createContext();

const resultsReducer = (results,action) => {
    let updatedResults = [...results];
    switch(action.type){
        case ADD_RESULT:
            updatedResults.push(action.result);
            break;
        case REMOVE_RESULT:
            updatedResults = updatedResults.filter((result,index) => index !== action.idx);
            break;
        default:
            return results;
    }
    
    return updatedResults;
}

const ResContext = props => {
    
    const calculatorContext = useContext(CalculatorContext);
    const[calculatorResults,dispatchCalculatorResults] = useReducer(resultsReducer,[]);

    
    const addResultHandler = () => {
        dispatchCalculatorResults({type:ADD_RESULT,result:calculatorContext.screenValue});
    }

    const removeResultHandler = (index) => {
        dispatchCalculatorResults({type:REMOVE_RESULT,idx:index})
    }

    return (
            <ResultContext.Provider value={{results:calculatorResults,addResult:addResultHandler,removeResult:removeResultHandler}}>
                {props.children}
            </ResultContext.Provider>);
}

export default ResContext;